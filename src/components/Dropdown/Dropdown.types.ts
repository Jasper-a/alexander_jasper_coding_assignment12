import {  MouseEventHandler } from "react";

export interface DropdownProps {
    text?: string,
    disabled?: boolean,
    backgroundColor?: string,
    onClick?: MouseEventHandler<HTMLDropdownElement>
};