import {  MouseEventHandler } from "react";

export interface ImgProps {
    text?: string,
    disabled?: boolean,
    backgroundColor?: string,
    onClick?: MouseEventHandler<HTMLImgElement>
};