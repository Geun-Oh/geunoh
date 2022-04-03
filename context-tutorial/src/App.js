import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./context/color";
import SelectColors from "./components/Selectcolors";

const App = () => {
  return(
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  )
}

export default App;

//Provider를 사용하면 Context의 value를 변경할 수 있다. 생성된 Context를 불러와 뒤에 provider함수를 붙여주고 value값을 원하는 값으로 변경해주면 된다!
// 다만 provider를 사용할 때 무조건 value값을 명시해주어야한다. 그렇지 않으면 오류가 난다.