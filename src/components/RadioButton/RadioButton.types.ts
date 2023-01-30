import {  MouseEventHandler } from "react";

export interface RadioButtonProps {
    text?: string,
    disabled?: boolean,
    backgroundColor?: string,
    onClick?: MouseEventHandler<HTMLRadioButtonElement>
};