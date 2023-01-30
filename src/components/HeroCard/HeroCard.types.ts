import {  MouseEventHandler } from "react";

export interface HeroCardProps {
    text?: string,
    disabled?: boolean,
    backgroundColor?: string,
    onClick?: MouseEventHandler<HTMLHeroCardElement>
};