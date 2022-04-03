import { ColorConsumer } from "../context/color";

const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>
                {({actions}) => (
                    <div style={{ display: 'flex' }}>
                        {colors.map(color => (
                            <div key={color} style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
                            onClick={() => actions.setColor(color)} //actions에 담아뒀던 함수 setColor를 불러온다.
                            onContextMenu={e => {
                                e.preventDefault();
                                actions.setSubColor(color); // 마우스 오른쪽 클릭 버튼 이벤트를 발생시키는 함수! preventDefault를 해주어야한다.
                                //contextmemu preventdefault는 개발자 모드에서 작동하지 않습니다! 명심하기.
                            }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr />
        </div>
    )
}

export default SelectColors;