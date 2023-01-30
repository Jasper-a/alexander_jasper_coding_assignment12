import {  MouseEventHandler } from "react";

export interface RadioButtonProps {
    disabled?: boolean,
    backgroundColor?: string,
    onClick?: MouseEventHandler<HTMLRadioButtonElement>,
    option1?: string,
    option2?: string,
    option3?: string
};