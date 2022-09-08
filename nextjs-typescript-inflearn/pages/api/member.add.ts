// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import MemberCtrl from "../../controller/member.ctrl";
import MemberModel from "../../models/member/member.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const supportMethod = ["POST"];
  try {
    if(supportMethod.indexOf(method!) === -1) {

    }
    await MemberCtrl.add(req, res);
  } catch (err) {
    console.error(err)
  }
}

