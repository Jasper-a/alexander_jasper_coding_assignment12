import React,{FC} from 'react';
import styled from 'styled-components';

import {TextProps} from "./Text.types"

const StyledText = styled.text<TextProps>`
    line-height: 1;
    font-size: 15px;
    font-weight: 700;
    font-weight: bold;
    border-radius: 3px;
    display: inline-block;
    padding: 9px 30px 11px;
    border: 0;
    color: #000000;
    background-color: ${props => props.backgroundColor};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    opacity: ${props => props.disabled ? 0.5 : 1};
`;

const Text: FC<TextProps> = ({disabled, text, backgroundColor, onClick, ...props}) => {
    return (
        <StyledText type="text" onClick={onClick} disabled={disabled} backgroundColor={backgroundColor} {...props}>
            {text}
        </StyledText>
    )
};

export default Text;