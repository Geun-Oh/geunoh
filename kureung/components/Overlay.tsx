import styled from '@emotion/styled';

interface OverlayProps {
    value: string;
    description: string;
}

export default function Overlay({ value, description }: OverlayProps) {
    return (
        <>
            <OverlayWrapper className='overlayWrapper'>
                <p>{value}</p>
                <span>{description}</span>
            </OverlayWrapper>
        </>
    )
}

const OverlayWrapper = styled('div')({
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#616161",
    color: "white",
})