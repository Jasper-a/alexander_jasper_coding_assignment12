import React,{FC} from 'react';
import styled from 'styled-components';

import {HeroCardProps} from "./HeroCard.types";
import Card from "../Card/Card";

const StyledHeroCard = styled.div<HeroCardProps>`
    background-color: ${props => props.backgroundColor};
    cursor: ${props => props.disabled ? "not-allowed" : "cursor"};
    opacity: ${props => props.disabled ? 0.5 : 1};
`;

const HeroCard: FC<HeroCardProps> = ({disabled, title, text, backgroundColor, img_width ...props}) => {
    return (
        <StyledHeroCard disabled={disabled} backgroundColor={backgroundColor} {...props}>
            <Card />
        </StyledHeroCard>
    )
};

export default HeroCard;