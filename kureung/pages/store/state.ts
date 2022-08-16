import { atom } from "recoil";

const keyword = atom({
    key: "keyword",
    default: ""
})

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

export { keyword, markerPosition };