import { NextApiResponse } from "next";
import CustomServerError from "./custom_server_error";

const handleError = (err: unknown, res: NextApiResponse) => {
    let unknownErr = err;
    if(!(err instanceof CustomServerError)) {
        unknownErr = new CustomServerError({ statusCode: 499, message: "unknownErr" })
    }
    const customError = unknownErr as CustomServerError;
    res.status(customError.statusCode).setHeader('location', customError.location ?? "").send(customError.serializeError())
}

export default handleError;