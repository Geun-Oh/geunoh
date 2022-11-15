import json from '../../dst.json';
import { RenderDst, Idst, RenderWithYaml } from '../../renderDst';

const dst = json as IMain;
export interface IMain {
    Main: Array<Idst>;
}

const Main = () => {
    return (
        <>
            {/* {RenderDst(dst.Main[0])} */}
            {RenderWithYaml("../main.yaml")}
        </>
    )
}

export default Main;