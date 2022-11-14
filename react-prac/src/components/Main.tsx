import Components from './components';
import json from '../../dst.json';

interface Idst {
    component: keyof typeof Components;
    attribute?: Array<object>;
    children?: Array<Idst>;
}

export interface IMain {
    Main: Array<Idst>;
}

const dst = json as IMain;
// const dst: IMain = {
//     Main: [
//       {
//         component: "Flex",
//         attribute: [{ "flexDirection": "column" }],
//         children: [
//           { component: "Text", attribute: [{ innerText: "Test 1" }] },
//           {
//             component: "Box",
//             children: [
//               {
//                 component: "Text",
//                 attribute: [{ innerText: "Its' In Box" }]
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
  

/**
 * dst.component props로 children을 전달받는 구조가 되도록 수정하기!
 */

const RenderDst = ({ component, attribute, children }: Idst) => {
    console.log(component, attribute, children)
    if(component === "Flex" || component === "Box") {
        const componentName: keyof typeof Components = component
        const C = Components[componentName]
        const a = attribute !== undefined ? attribute[0] : [];
        return (
            <C {...a}>
                {children!.map((item) => RenderDst(item))}
            </C>
        )
    } else {
        const componentName: keyof typeof Components = component
        const C = Components[componentName]
        const a = attribute !== undefined ? attribute[0] : [];
        return (
            <C {...a} />
        )
    }
}

const Main = () => {
    return (
        <>
            {RenderDst(dst.Main[0])}
        </>
    )
}

export default Main;