import {  MouseEventHandler } from "react";

export interface DropdownProps {
    disabled?: boolean,
    backgroundColor?: string,
    onClick?: MouseEventHandler<HTMLDropdownElement>,
    option1?: string,
    option2?: string,
    option3?: string
};