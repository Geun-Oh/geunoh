import { useContext } from "react";
import ColorContext from '../context/color';

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return(
        <>
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color
                }}
            />
            <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subColor
                }}
            />
        </>
    )
}

export default ColorBox;


//아래 방법은 children 함수를 전달하는 Render props 패턴이고, 이것이 복잡하다면 위의 Hook를 이용한 방법을 쓰는게 훨씬 간결하다!
//다만 Hook은 함수 컴포넌트에서만 사용 가능하다. 클래스 컴포넌트에서는 못 쓴다는 것을 주의하자.

// import { ColorConsumer } from "../context/color";

// const ColorBox = () => {
//     return (
//         <ColorConsumer>
//             {({ state }) => (
//                 <>
//                     <div 
//                     style={{
//                         width: '64px',
//                         height: '64px',
//                         background: state.color
//                     }}
//                     />
//                     <div 
//                     style={{
//                         width: '32px',
//                         height: '32px',
//                         background: state.subColor
//                     }}
//                     />
//                 </>
//             )}
//         </ColorConsumer>
//     )
// }

// export default ColorBox;