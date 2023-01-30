import {  MouseEventHandler } from "react";

export interface CardProps {
    text?: string,
    disabled?: boolean,
    backgroundColor?: string,
    onClick?: MouseEventHandler<HTMLCardElement>
};