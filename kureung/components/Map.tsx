import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { keyword, markerPosition } from '../pages/store/state';

export interface MapProps {
    latitude: number;
    longitude: number;
}

/**
 * Map 컴포넌트를 생성할 때 document.head.appendChild로 script를 등록하고
 * eventListener를 등록해 script가 load된 후 onLoadKakaoMap을 호출하는 방식
 * 마커를 등록하는 코드도 포함되어 있으므로, 마커를 원하지 않는다면 marker가
 * 포함된 세 줄을 제거하면 된다.
 */

export default function Map({ latitude, longitude}: MapProps) {
    const [mark, setMarkerPosition] = useRecoilState(markerPosition);
    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_APP_KEY}&autoload=false&libraries=services`;
        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(latitude, longitude),
                };
                const map = new window.kakao.maps.Map(container, options);
                window.kakao.maps.event.addListener(map, "click", (mouseEvent: any) => {
                    setMarkerPosition(prev => [...prev, {latlng: [mouseEvent.latLng.Ma, mouseEvent.latLng.La]}]);
                });
                const ps = new window.kakao.maps.services.Places();
                ps.keywordSearch("이태원", (data: any, status: any, _pagination: any) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        for(let i = 0; i < data.length; i++) {
                            setMarkerPosition(prev => [...prev, {latlng: [Number(data[i].y), Number(data[i].x)]}]);
                            console.log(mark);
                        }
                    }
                });
                for(let i = 0; i < mark.length; i++) {
                    const position = new window.kakao.maps.LatLng(mark[i].latlng[0], mark[i].latlng[1]);
                    const marker = new window.kakao.maps.Marker({
                        position,
                    });
                    marker.setMap(map);
                }
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);

        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, []);

    return (
        <>
            <div id="map"></div>
            <style jsx>{`
                #map {
                    width: 100vw;
                    height: 100vh;
                    aspect-ratio: 320 / 320;
                }
            `}</style>
        </>
    )
}