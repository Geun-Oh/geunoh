// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import checkSupportMethod from "../../../controller/error/check_support_method";
import handleError from "../../../controller/error/handle_error";
import MemberCtrl from "../../../controller/member.ctrl";

/**
 * 앞으로 우리가 처리하는 api들은 대부분 이러한 형태를 띌 것이므로 그 구조를 잘 알아두기!
 * @param req mothod, header, body를 json 형태로 받는다.
 * @param res body의 정보를 바탕으로 user를 추가한다.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const supportMethod = ["POST", "GET"];
  try {
    checkSupportMethod(supportMethod, method!);
    await MemberCtrl.findByScreenName(req, res);
  } catch (err) {
    console.error(err);
    handleError(req, res);
  }
}