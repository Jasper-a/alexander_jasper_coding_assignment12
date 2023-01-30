import React,{FC} from 'react';
import styled from 'styled-components';

import {RadioButtonProps} from "./RadioButton.types"

const StyledRadioButton = styled.radiobutton<RadioButtonProps>`
    display: inline-block;
    padding: 9px 30px 11px;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    opacity: ${props => props.disabled ? 0.5 : 1};
`;

const RadioButton: FC<RadioButtonProps> = ({disabled, backgroundColor, onClick, option1, option2, option3, ...props}) => {
    return (
        <>
        <StyledRadioButton type="radio" name="radio" id={option1} onClick={onClick} disabled={disabled} {...props} />
        <StyledRadioButton type="radio" name="radio" id={option2} onClick={onClick} disabled={disabled} {...props} />
        <StyledRadioButton type="radio" name="radio" id={option3} onClick={onClick} disabled={disabled} {...props} />
        </>
    )
};

export default RadioButton;