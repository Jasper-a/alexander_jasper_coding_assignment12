import {  MouseEventHandler } from "react";

export interface TableProps {
    text?: string,
    disabled?: boolean,
    backgroundColor?: string,
    onClick?: MouseEventHandler<HTMLTableElement>
};