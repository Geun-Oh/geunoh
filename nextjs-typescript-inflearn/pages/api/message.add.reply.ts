import type { NextApiRequest, NextApiResponse } from "next";
import checkSupportMethod from "../../controller/error/check_support_method";
import handleError from "../../controller/error/handle_error";
import MessageCtrl from "../../controller/message.ctrl";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const supportMethod = ["POST"];
  try {
    checkSupportMethod(supportMethod, method!);
    await MessageCtrl.postReply(req, res);
  } catch (err) {
    console.error(err)
    handleError(req, res)
  }
}