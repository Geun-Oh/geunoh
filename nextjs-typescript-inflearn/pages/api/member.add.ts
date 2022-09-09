// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import CustomServerError from "../../controller/error/custom_server_error";
import handleError from "../../controller/error/handle_error";
import MemberCtrl from "../../controller/member.ctrl";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const supportMethod = ["POST"];
  try {
    if(supportMethod.indexOf(method!) === -1) {
      throw new CustomServerError({ statusCode: 400, message: '지원하지 않는 형식입니다.'})
    }
    await MemberCtrl.add(req, res);
  } catch (err) {
    console.error(err)
    handleError(req, res)
  }
}

