//클래스형 컴포넌트에서 Context를 좀 더 간편하게 쓰기 위해서는 static contextType을 정의하는 방법이 있다.
import { Component } from "react";
import ColorContext from "../context/color";


const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];

class SelectColors extends Component{
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.setColor(color);
    }

    handleSetSubColor = subColor => {
        this.context.actions.setSubColor(subColor);
    }

    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex' }}>
                    {colors.map(color => (
                        <div
                        key={color}
                        style={{
                            background: color,
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer'
                        }}
                        onClick = {() => this.handleSetColor(color)}
                        onContextMenu = {e => {
                            e.preventDefault();
                            this.handleSetSubColor(color);
                        }}
                        />
                    ))}
                </div>
                <hr />
            </div>
        )
    }
}

export default SelectColors;
//위의 방법을 사용하면 this.context를 조회하였을 때 현재 Context의 value를 가리키게 된다. 
//만일 setColor를 호출하고 싶다면 this.context.actions.setColor를 호출하여야 한다.
//위처럼 static contextType을 정의하면 클래스 메서드에서도 Context에 넣어 둔 함수를 호출할 수 있다는 장점이 있으나, 한 클래스에서 하나의 Context밖에 사용하지 못한다는 점이다.
//또한 앞으로 클래스형 컴포넌트를 작성할 일이 많지 않으므로 useContext를 사용하는 것이 더 낫다...

// import { ColorConsumer } from "../context/color";

// const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];

// const SelectColors = () => {
//     return (
//         <div>
//             <h2>색상을 선택하세요.</h2>
//             <ColorConsumer>
//                 {({actions}) => (
//                     <div style={{ display: 'flex' }}>
//                         {colors.map(color => (
//                             <div key={color} style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
//                             onClick={() => actions.setColor(color)} //actions에 담아뒀던 함수 setColor를 불러온다.
//                             onContextMenu={e => {
//                                 e.preventDefault();
//                                 actions.setSubColor(color); // 마우스 오른쪽 클릭 버튼 이벤트를 발생시키는 함수! preventDefault를 해주어야한다.
//                                 //contextmemu preventdefault는 개발자 모드에서 작동하지 않습니다! 명심하기.
//                             }}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </ColorConsumer>
//             <hr />
//         </div>
//     )
// }

// export default SelectColors;