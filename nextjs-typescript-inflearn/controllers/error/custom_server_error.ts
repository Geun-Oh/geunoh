export default class CustomServerError extends Error {
    public statusCode: number;
    
    public location?: string; // 300번대 코드를 반환할 때 사용

    constructor({ statusCode = 500, message, location }: { statusCode?: number; message: string }):  {
        super(message);
        this.statusCode = statusCode;
        this.locaion = location;
    }

    serializeErrors(): {message: string} | string {
        return { message: this.message};
    }
}