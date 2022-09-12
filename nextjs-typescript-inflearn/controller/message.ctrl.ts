import { NextApiRequest, NextApiResponse } from "next";
import MessageModel from "../models/message/message.model";
import BadReqError from "./error/bad_request_error";

const post = async (req: NextApiRequest, res: NextApiResponse) => {
    const { uid, message, author } = req.body;
    if(uid === undefined) throw new BadReqError('uid가 누락되었습니다.');
    if(message === undefined) throw new BadReqError('message가 누락되었습니다.');
    await MessageModel.post({ uid, message, author });
    return res.status(201).end();
}

const list = async (req: NextApiRequest, res: NextApiResponse) => {
    const { uid } = req.query;
    if(uid === undefined) throw new BadReqError('uid가 누락되었습니다.');
    const uidToString = Array.isArray(uid) ? uid[0] : uid;
    const listRes = await MessageModel.list({ uid: uidToString });
    return res.status(200).json(listRes);
}

const postReply = async (req: NextApiRequest, res: NextApiResponse) => {
    const { uid, messageId, reply } = req.body;
    if(uid === undefined) throw new BadReqError('uid가 누락되었습니다.');
    if(messageId === undefined) throw new BadReqError('messageId가 누락되었습니다.');
    if(reply === undefined) throw new BadReqError('reply가 누락되었습니다.');
    await MessageModel.postReply({ uid, messageId, reply });
    return res.status(201).end();
}

const MessageCtrl = {
    post,
    list,
    postReply,
}

export default MessageCtrl;