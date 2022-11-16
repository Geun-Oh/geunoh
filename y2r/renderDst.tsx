import Components from './src/components/components';
import json from './dst.json';
import { useEffect, useState } from 'react';

export interface Idst {
    component: keyof typeof Components;
    attribute?: Array<object>;
    children?: Array<Idst>;
}

export interface IMain {
    Main: Array<Idst>;
}

/**
 * json을 입력받아 jsx 컴포넌트를 반환하는 함수입니다.
 * @param jsonFile yaml을 변환한 json 형태의 파일입니다.
 * @returns jsx를 반환합니다. json을 해석한 전체 페이지가 반환됩니다.
 */
export const RenderWithJSON = (jsonFile: typeof json) => {
    const initialState: IMain = {
        Main: [
            {
                component: "Text",
                attribute: [{ innerText: "Hello!" }]
            }
        ],
    }
    const [DST, setDST] = useState<IMain>(initialState);
    useEffect(() => {
        try {
            // const dst = JSON.stringify(yaml.load(fs.readFileSync(route, 'utf-8')));
            const dst = JSON.stringify(jsonFile);
            // console.log(dst);
            setDST(JSON.parse(dst) as IMain);
            console.log(DST);
            // exec(`cd ../react-prac && cat <<EOF > ./dst.json\n ${dst}`);
        } catch (e) {
            console.log(e);
        }
    }, [])
    return (
        <>
            {RenderDst(DST.Main[0])}
        </>
    )
}

export const RenderTest = () => {
    const newDST: IMain = JSON.parse(JSON.stringify(json));
    return (
        <>
            {RenderDst(newDST.Main[0])}
        </>
    )
}


/**
 * Dst를 받아서 직접적으로 컴포넌트를 렌더링하는 로직이 담긴 함수입니다.
 * @param param0 컴포넌트 이름, 속성, 자식 컴포넌트를 포함하는 객체 형태의 값입니다.
 * @param index map함수 사용 시 필요한 key값입니다.
 * @returns jsx컴포넌트가 반환됩니다.
 */
const RenderDst = ({ component, attribute, children }: Idst, index?: number) => {
    console.log(component, attribute, children);
    if (component === "Flex" || component === "Box") {
        const componentName: keyof typeof Components = component
        const C = Components[componentName]
        const a = attribute !== undefined ? attribute[0] : [];
        return (
            <C {...a} key={index}>
                {children!.map((item, index) => RenderDst(item, index))}
            </C>
        )
    } else {
        const componentName: keyof typeof Components = component
        const C = Components[componentName]
        const a = attribute !== undefined ? attribute[0] : [];
        return (
            <C {...a} key={index} />
        )
    }
}