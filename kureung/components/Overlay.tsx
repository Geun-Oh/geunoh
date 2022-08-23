import React from 'react';

interface OverlayProps {
    value: string;
    description: string;
}

export default function Overlay({ value, description }: OverlayProps) {
    return (
        <div style={{ backgroundColor: "#616161", width: "300px", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0.5rem 1rem" }}>
            <p style={{ color: "white", fontWeight: 600, fontSize: "1.5rem" }}>{value}</p>
            <p style={{ whiteSpace: "normal", color: "white" }}>{description}</p>
        </div>
    )
}