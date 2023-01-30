import React,{FC} from 'react';
import styled from 'styled-components';

import {RadioButtonProps} from "./RadioButton.types"

const StyledRadioButton = styled.radiobutton<RadioButtonProps>`
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

const RadioButton: FC<RadioButtonProps> = ({disabled, text, backgroundColor, onClick, ...props}) => {
    return (
        <StyledRadioButton type="radiobutton" onClick={onClick} disabled={disabled} backgroundColor={backgroundColor} {...props}>
            {text}
        </StyledRadioButton>
    )
};

export default RadioButton;