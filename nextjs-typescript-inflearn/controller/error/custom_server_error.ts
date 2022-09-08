export default class CustomServerError extends Error {
    public statusCode: number;
    public location?: string;

    constructor ({ statusCode = 500, message }: {statusCode?: number; message: string; location}) {
        super(message);
        this.statusCode = statusCode;
        this.location = location;
    }

    serializeError(): {message: string} | string {
        return { message: this.message };
    }
}