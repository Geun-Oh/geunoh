import { useEffect } from 'react';

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
    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_APP_KEY}&autoload=false`;
        const positions = [
            {
                title: '카카오', 
                latlng: window.kakao && new window.kakao.maps.LatLng(33.450705, 126.570677)
            },
            {
                title: '생태연못', 
                latlng: window.kakao && new window.kakao.maps.LatLng(33.450936, 126.569477)
            },
            {
                title: '텃밭', 
                latlng: window.kakao && new window.kakao.maps.LatLng(33.450879, 126.569940)
            },
            {
                title: '근린공원',
                latlng: window.kakao && new window.kakao.maps.LatLng(33.451393, 126.570738)
            }
        ];
        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(latitude, longitude),
                };
                const map = new window.kakao.maps.Map(container, options);
                const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
                for(let i = 0; i < positions.length; i++) {
                    const marker = new window.kakao.maps.Marker({
                        position: positions[i].latlng,
                    });
                    marker.setMap(map);
                }
                window.kakao.maps.event.addListener(map, "click", (mouseEvent: any) => {
                    console.log(mouseEvent);
                });
            });
        };

        mapScript.addEventListener("load", onLoadKakaoMap);

        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, [latitude, longitude]);
    
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