import { useEffect } from 'react';
import { MapProps } from './Map';

type MarkerProps = MapProps;

export default function Marker({ latitude, longitude }: MarkerProps) {
    useEffect(() => {
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
        const marker = new window.kakao.maps.Marker({
            position: markerPosition,
        });
    })
}