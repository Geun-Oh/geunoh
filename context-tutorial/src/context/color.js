//context를 만들 때 contexts 디렉터리를 만들 필요는 없다. 다만, 다른 파일과 가분하기 위해 따로 디렉터리를 만들었으며, 본래는 자신의 자유이다.

import { createContext, useState } from "react";

const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red' },
    actions: {
        setColor: () => {},
        setSubColor: () => {}
    }
}); 
//색을 지정하는 전역상태변수를 생성한다. 새로 context를 만들 때는 createContext함수를 사용함. 초기화를 해주어야함!
//actions에서는 상태 값 이외에 함수를 전달해줄 수도 있다. 위의 actions에서는 setColor, setSubColor라는 함수를 초기화하여 정의해준것이다.

const ColorProvider = ({ children }) => {
    const [ color, setColor ] = useState('black');
    const [ subColor, setSubColor ] = useState('red');
    //useState를 이용하여 변수 생성
    const value = {
        state: { color, subColor },
        actions: { setColor, setSubColor }
    }
    //위 value의 내용이 추후 Provider로 전해져서 Context에 대입된다.
    return(
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider> // Context를 바꿈과 동시에 children에 있는 내용을 구현한다!
    )
}

const { Consumer: ColorConsumer } = ColorContext; // ColorContext destructuring을 통해 ColorConsumer 정의

export { ColorProvider, ColorConsumer }; // ColorConsumer, ColorProvider 내보내기!

export default ColorContext;