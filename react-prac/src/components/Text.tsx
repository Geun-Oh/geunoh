/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from '../themes';

type AlignType = "left" | "center" | "right";

interface TextProps {
    color?: string;
    fontSize?: string;
    fontWeight?: number;
    textAlign?: AlignType;
    innerText?: string;
    hoverColor?: string;
    onClick?: (e: any) => any;
    style?: Object;
}

const Text = ({ color, fontSize, fontWeight, textAlign, innerText, style, hoverColor, onClick }: TextProps) => {
    return (
        <span css={textStyle({ color, fontSize, fontWeight, textAlign, innerText, hoverColor })} style={style} onClick={onClick}>
            {innerText || '내용을 입력해주세요'}
        </span>
    );
};

const textStyle = ({ color, fontSize, fontWeight, textAlign, hoverColor }: TextProps) => css`
color: ${color || 'black'};
cursor: pointer;
line-height: 1.5;
font-size: ${fontSize || BaseStyles.Text.Heading3};
font-weight: ${fontWeight || BaseStyles.Text.Border3};
font-family: ${BaseStyles.Font.Inter};
text-align: ${textAlign || 'left'};
&:hover {
    color: ${hoverColor};
}
`

export default Text;