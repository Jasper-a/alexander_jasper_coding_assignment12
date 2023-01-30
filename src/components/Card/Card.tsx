import React,{FC} from 'react';
import styled from 'styled-components';

import {CardProps} from "./Card.types"

const StyledCard = styled.card<CardProps>`
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

const Card: FC<CardProps> = ({disabled, text, backgroundColor, onClick, ...props}) => {
    return (
        <StyledCard type="card" onClick={onClick} disabled={disabled} backgroundColor={backgroundColor} {...props}>
            {text}
        </StyledCard>
    )
};

export default Card;