import {  MouseEventHandler } from "react";

export interface TextProps {
    text?: string,
    disabled?: boolean,
    backgroundColor?: string,
    onClick?: MouseEventHandler<HTMLTextElement>
};