import { useEffect, useState } from "react";

const Main = () => {
    const [status, setStatus] = useState<string>("APPROVE");

    useEffect(() => {
        const status = "APPROVE";
        setStatus(status);
    }, []);

    return (
        status !== null && <button style={{ backgroundColor: status === "APPROVE" ? "red" : "blue" }}>Click!</button>
    )
}

export default Main;