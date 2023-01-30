import React,{FC} from 'react';
import styled from 'styled-components';

import {TextProps} from "./Text.types"

const StyledText = styled.text<TextProps>`
    line-height: 1;
    font-size: ${props => props.bold ? "20px" : "15px"};
    font-weight: 400;
    font-weight: ${props => props.bold ? "bold" : ""};
    padding: 9px 10px 11px;
    display: ${props => props.display};
    border: 0;
    color: #000000;
    background-color: ${props => props.backgroundColor};
    cursor: ${props => props.disabled ? "not-allowed" : "cursor"};
    opacity: ${props => props.disabled ? 0.5 : 1};
`;

const Text: FC<TextProps> = ({disabled, text, backgroundColor, display, bold, ...props}) => {
    return (
        <StyledText disabled={disabled} backgroundColor={backgroundColor} display={display} bold={bold} {...props}>
            {text}
        </StyledText>
    )
};

export default Text;