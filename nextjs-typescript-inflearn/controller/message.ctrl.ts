import { NextApiRequest, NextApiResponse } from "next";
import FirebaseAdmin from "../models/firebase_admin";
import MessageModel from "../models/message/message.model";
import BadReqError from "./error/bad_request_error";
import CustomServerError from "./error/custom_server_error";

const post = async (req: NextApiRequest, res: NextApiResponse) => {
    const { uid, message, author } = req.body;
    if(uid === undefined) throw new BadReqError('uid가 누락되었습니다.');
    if(message === undefined) throw new BadReqError('message가 누락되었습니다.');
    await MessageModel.post({ uid, message, author });
    return res.status(201).end();
}

const list = async (req: NextApiRequest, res: NextApiResponse) => {
    const { uid, page, size } = req.query;
    if(uid === undefined) throw new BadReqError('uid가 누락되었습니다.');
    const convertPage = page === undefined ? '1': page;
    const convertSize = size === undefined ? '10': size;
    const uidToString = Array.isArray(uid) ? uid[0] : uid;
    const pageToString = Array.isArray(convertPage) ? convertPage[0] : convertPage;
    const sizeToString = Array.isArray(convertSize) ? convertSize[0] : convertSize;
    const listRes = await MessageModel.listWithPage({ uid: uidToString, page: parseInt(pageToString!, 10), size: parseInt(sizeToString!, 10) });
    return res.status(200).json(listRes);
}

const get = async (req: NextApiRequest, res: NextApiResponse) => {
    const { uid, messageId } = req.query;
    if(uid === undefined) throw new BadReqError('uid가 누락되었습니다.');
    if(messageId === undefined) throw new BadReqError('messageId가 누락되었습니다.');
    const uidToString = Array.isArray(uid) ? uid[0] : uid;
    const msgIdToString = Array.isArray(messageId) ? messageId[0] : messageId;
    const data = await MessageModel.get({ uid: uidToString, messageId: msgIdToString });
    return res.status(200).json(data);
}

const postReply = async (req: NextApiRequest, res: NextApiResponse) => {
    const { uid, messageId, reply } = req.body;
    if(uid === undefined) throw new BadReqError('uid가 누락되었습니다.');
    if(messageId === undefined) throw new BadReqError('messageId가 누락되었습니다.');
    if(reply === undefined) throw new BadReqError('reply가 누락되었습니다.');
    await MessageModel.postReply({ uid, messageId, reply });
    return res.status(201).end();
}

const updateMessage = async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization;
    if(token === undefined) {
        throw new CustomServerError({ statusCode: 401, message: '권한이 없습니다.' });
    }
    let tokenUid: null | string = null;
    try {
        const decode = await FirebaseAdmin.getInstance().Auth.verifyIdToken(token);
        tokenUid = decode.uid;
    } catch(err) {
        throw new BadReqError('token에 문제가 있습니다.');
    }
    const { uid, messageId, deny } = req.body;
    if(uid !== tokenUid) {
        throw new CustomServerError({ statusCode: 401, message: '수정 권한이 없습니다.' });
    }
    if(uid === undefined) throw new BadReqError('uid가 누락되었습니다.');
    if(messageId === undefined) throw new BadReqError('messageId가 누락되었습니다.');
    if(deny === undefined) throw new BadReqError('deny가 누락되었습니다.');
    const result = await MessageModel.updateMessage({ uid, messageId, deny });
    return res.status(200).json(result);
}

const MessageCtrl = {
    post,
    updateMessage,
    list,
    get,
    postReply,
}

export default MessageCtrl;