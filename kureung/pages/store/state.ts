import { atom } from "recoil";
import Map from "../../components/Map";

const overlayProps = atom({
    key: "overlayProps",
    default: [
        {
            value: "고려대",
            description: "제가 머무는 곳입니다. 지금 보고 있는 이곳은 고려대학교의 학생회관이며, 중앙동아리들의 동아리방이 위치하고 있어 많은 학생들이 오가는 장소입니다.",
            latlng: [37.588194705681, 127.03402453668]
        }
    ],
});

const markerPosition = atom({
    key: "markerPosition",
    default: [
        {
            latlng: [33.450705, 126.570677]
        },
        {
            latlng: [33.450936, 126.569477]
        },
        {
            latlng: [33.450879, 126.569940]
        },
        {
            latlng: [33.451393, 126.570738]
        }
    ]
})

export { overlayProps, markerPosition };