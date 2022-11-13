import { useEffect, useState } from "react";
import dst from '../dst';

interface Idst {
    component: string;
    attribute?: object;
    children?: Idst[];
}
/**
 * dst.component props로 children을 전달받는 구조가 되도록 수정하기!
 */

const renderDst = (dst: Idst) => {
    return (
        <dst.component {...dst.attribute}>
            {dst.children && dst.children.map((item) => renderDst(item))}
        </dst.component>
    )
}

const Main = () => {
    const [status, setStatus] = useState<string>("APPROVE");
    useEffect(() => {
        const status = "APPROVE";
        setStatus(status);
    }, []);

    dst.Main

    return (
        status !== null && <button style={{ backgroundColor: status === "APPROVE" ? "red" : "blue" }}>Click!</button>
    )
}

export default Main;