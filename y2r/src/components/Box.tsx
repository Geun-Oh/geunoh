/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";

interface BoxProps {
    /**박스의 넓이를 지정해주세요. 기본값은 100%입니다. */
    width?: string;
    /**Border Radius를 설정해주세요. */
    borderRadius?: string;
    /**배경 색을 설정해주세요. */
    backgroundColor?: string;
    /**박스 내부에 포함될 컴포넌트를 설정해주세요. */
    children?: JSX.Element | JSX.Element[];
    /**박스의 높이를 지정해주세요. 기본값은 auto입니다. */
    height?: string;
}

const Box = ({
    width,
    borderRadius,
    backgroundColor,
    children,
    height,
}: BoxProps) => {
    return (
        <div css={style({ width, height, backgroundColor, borderRadius })}>
            {children}
        </div>
    )
}

const style = ({ width, height, backgroundColor, borderRadius }: BoxProps) => css`
    width: ${width || "calc(100% - 2rem)"};
    height: ${height};
    background-color: ${backgroundColor || BaseStyles.Color.Black4};
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    overflow: hidden;
    border-radius: ${borderRadius || "1rem"};
    ::-webkit-scrollbar-track {
    background-color: none;
    }
    ::-webkit-scrollbar {
    width: 6px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-thumb {
    background-color: lightgray;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: none;  /* creates padding around scroll thumb */
    }
`

export default Box;