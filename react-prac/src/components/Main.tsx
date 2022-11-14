import Components from './components';

interface Idst {
    component: keyof typeof Components;
    attribute?: Array<object>;
    children?: Array<Idst>;
}

export interface IMain {
    Main: Array<Idst>;
}

/**
 * dst.component props로 children을 전달받는 구조가 되도록 수정하기!
 */

const RenderDst = ({ component, attribute, children }: Idst) => {
    if(component === "Flex" || component === "Box") {
        const componentName: keyof typeof Components = component
        const C = Components[componentName]
        return (
            <C {...attribute![0]}>
                {children!.map((item) => RenderDst(item))}
            </C>
        )
    } else {
        const componentName: keyof typeof Components = component
        const C = Components[componentName]
        return (
            <C {...attribute![0]} />
        )
    }
}

const Main = () => {
    return (
        <>
            {RenderDst(dst!.Main[0])}
        </>
    )
}

export default Main;