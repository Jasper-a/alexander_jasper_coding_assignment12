import React,{FC} from 'react';
import styled from 'styled-components';

import {ImgProps} from "./Img.types"

const StyledImg = styled.img<ImgProps>`
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

const Img: FC<ImgProps> = ({disabled, text, backgroundColor, onClick, ...props}) => {
    return (
        <StyledImg type="img" onClick={onClick} disabled={disabled} backgroundColor={backgroundColor} {...props}>
            {text}
        </StyledImg>
    )
};

export default Img;