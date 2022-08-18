interface OverlayProps {
    value: string;
    description: string;
}

export default function Overlay({ value, description }: OverlayProps) {
    return (
        <>
            <div className='overlayWrapper'>
                <h1>{value}</h1>
                <span>{description}</span>
            </div>
            <style jsx>{`
            .overlayWrapper {
                width: 100px;
                height: 100px;
                display: flex;
                justify-contene: center;
                align-items: center;
            }
        `}</style>
        </>
    )
}