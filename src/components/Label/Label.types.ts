import {  MouseEventHandler } from "react";

export interface LabelProps {
    text?: string,
    disabled?: boolean,
    backgroundColor?: string,
    onClick?: MouseEventHandler<HTMLLabelElement>
};