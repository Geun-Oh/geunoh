import { firestore } from "firebase-admin";
import CustomServerError from "../../controller/error/custom_server_error";
import FirebaseAdmin from "../firebase_admin";
import { InAuthUser } from "../in_auth_user";
import { InMessage, InMessageServer } from "./in_message";

const MEMBER_COL = "members";
const MSG_COL = "messages";
const SCR_NAME_COL = "screen_names";
const Firestore = FirebaseAdmin.getInstance().Firestore;

const post = async ({
  uid,
  message,
  author,
}: {
  uid: string;
  message: string;
  author?: { displayName: string; photoURL?: string };
}) => {
  const memberRef = Firestore.collection(MEMBER_COL).doc(uid);
  await Firestore.runTransaction(async (transaction) => {
    let messageCount = 1;
    const memberDoc = await transaction.get(memberRef);
    if (memberDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: "존재하지 않는 유저입니다.",
      });
    }
    const memberInfo = memberDoc.data() as InAuthUser & {
      messageCount?: number;
    };
    if (memberInfo.messageCount !== undefined) {
      messageCount = memberInfo.messageCount;
    }
    const newMessageRef = memberRef.collection(MSG_COL).doc();
    const newMessageBody: {
      message: string;
      createdAt: firestore.FieldValue;
      author?: { displayName: string; photoURL?: string };
      messageNo: number;
    } = {
      message,
      messageNo: messageCount,
      createdAt: firestore.FieldValue.serverTimestamp(),
    };
    if (author !== undefined) newMessageBody.author = author;
    await transaction.set(newMessageRef, newMessageBody);
    await transaction.update(memberRef, { messageCount: messageCount + 1 });
  });
};

const updateMessage = async ({
  uid,
  messageId,
  deny
}: {
  uid: string;
  messageId: string;
  deny: boolean;
}) => {
  const memberRef = Firestore.collection(MEMBER_COL).doc(uid);
  const messageRef = Firestore.collection(MEMBER_COL)
    .doc(uid)
    .collection(MSG_COL)
    .doc(messageId);
  const result = await Firestore.runTransaction(async (transaction) => {
    const memberDoc = await transaction.get(memberRef);
    const messageDoc = await transaction.get(messageRef);
    if (memberDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: "존재하지 않는 유저입니다.",
      });
    }
    if (messageDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: "존재하지 않는 문서입니다.",
      });
    }
    await transaction.update(messageRef, { deny });
    const messageData = messageDoc.data() as InMessageServer;
    return {
      ...messageData,
      id: messageId,
      deny,
      createdAt:
        messageData.createdAt && messageData.createdAt.toDate().toISOString(),
      replyAt:
        messageData.replyAt && messageData.replyAt.toDate().toISOString(),
    };
  });
  return result;
};

const list = async ({ uid }: { uid: string }) => {
  const memberRef = Firestore.collection(MEMBER_COL).doc(uid);
  const listData = await Firestore.runTransaction(async (transaction) => {
    const memberDoc = await transaction.get(memberRef);
    if (memberDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: "존재하지 않는 유저입니다.",
      });
    }
    const messageCol = memberRef
      .collection(MSG_COL)
      .orderBy("createdAt", "desc");
    const messageColDoc = await transaction.get(messageCol);
    const data = messageColDoc.docs.map((mv) => {
      const docData = mv.data() as Omit<InMessageServer, "id">;
      const isDeny = docData.deny !== undefined && docData.deny === true;
      const returnData = {
        ...docData,
        message: isDeny ? '비공개 처리된 메세지 입니다.' : docData.message,
        id: mv.id,
        createdAt:
          docData.createdAt && docData.createdAt.toDate().toISOString(),
        replyAt: docData.replyAt && docData.replyAt.toDate().toISOString(),
      } as InMessage;
      return returnData;
    });
    return data;
  });
  return listData;
};

const listWithPage = async ({
  uid,
  page = 1,
  size = 10,
}: {
  uid: string;
  page?: number;
  size?: number;
}) => {
  const memberRef = Firestore.collection(MEMBER_COL).doc(uid);
  const listData = await Firestore.runTransaction(async (transaction) => {
    const memberDoc = await transaction.get(memberRef);
    if (memberDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: "존재하지 않는 유저입니다.",
      });
    }
    const memberInfo = memberDoc.data() as InAuthUser & {
      messageCount?: number;
    };
    const { messageCount = 0 } = memberInfo;
    const totalElements = messageCount !== 0 ? messageCount - 1 : 0;
    const remains = totalElements % size;
    const totalPages = (totalElements - remains) / size + (remains > 0 ? 1 : 0);
    const startAt = totalElements - (page - 1) * size;
    if (startAt < 0) {
      return {
        totalElements,
        totalPages: 0,
        page,
        size,
        content: [],
      };
    }
    const messageCol = memberRef
      .collection(MSG_COL)
      .orderBy("messageNo", "desc")
      .startAt(startAt)
      .limit(size);
    const messageColDoc = await transaction.get(messageCol);
    const data = messageColDoc.docs.map((mv) => {
      const docData = mv.data() as Omit<InMessageServer, "id">;
      const isDeny = docData.deny !== undefined && docData.deny === true;
      const returnData = {
        ...docData,
        message: isDeny ? '비공개 처리된 메세지 입니다.' : docData.message,
        id: mv.id,
        createdAt:
          docData.createdAt && docData.createdAt.toDate().toISOString(),
        replyAt: docData.replyAt && docData.replyAt.toDate().toISOString(),
      } as InMessage;
      return returnData;
    });
    return {
      totalElements,
      totalPages,
      page,
      size,
      content: data,
    };
  });
  return listData;
};

const get = async ({ uid, messageId }: { uid: string; messageId: string }) => {
  const memberRef = Firestore.collection(MEMBER_COL).doc(uid);
  const messageRef = Firestore.collection(MEMBER_COL)
    .doc(uid)
    .collection(MSG_COL)
    .doc(messageId);
  const data = await Firestore.runTransaction(async (transaction) => {
    const memberDoc = await transaction.get(memberRef);
    const messageDoc = await transaction.get(messageRef);
    if (memberDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: "존재하지 않는 유저입니다.",
      });
    }
    if (messageDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: "존재하지 않는 문서입니다.",
      });
    }
    const messageData = messageDoc.data() as InMessageServer;
    const isDeny = messageData.deny !== undefined && messageData.deny === true;
    return {
      ...messageData,
      message: isDeny ? '비공개 처리된 메세지 입니다.' : messageData.message,
      id: messageId,
      createdAt:
        messageData.createdAt && messageData.createdAt.toDate().toISOString(),
      replyAt:
        messageData.replyAt && messageData.replyAt.toDate().toISOString(),
    };
  });
  return data;
};

const postReply = async ({
  uid,
  messageId,
  reply,
}: {
  uid: string;
  messageId: string;
  reply: string;
}) => {
  const memberRef = Firestore.collection(MEMBER_COL).doc(uid);
  const messageRef = Firestore.collection(MEMBER_COL)
    .doc(uid)
    .collection(MSG_COL)
    .doc(messageId);
  await Firestore.runTransaction(async (transaction) => {
    const memberDoc = await transaction.get(memberRef);
    const messageDoc = await transaction.get(messageRef);
    if (memberDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: "존재하지 않는 유저입니다.",
      });
    }
    if (messageDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: "존재하지 않는 문서입니다.",
      });
    }
    const messageData = messageDoc.data() as InMessageServer;
    if (messageData.reply !== undefined) {
      throw new CustomServerError({
        statusCode: 400,
        message: "이미 댓글을 입력했습니다.",
      });
    }
    await transaction.update(messageRef, {
      reply,
      replyAt: firestore.FieldValue.serverTimestamp(),
    });
  });
};

const MessageModel = {
  post,
  updateMessage,
  list,
  listWithPage,
  get,
  postReply,
};

export default MessageModel;
