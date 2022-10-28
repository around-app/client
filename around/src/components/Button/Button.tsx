import React, { FC } from "react";
import { StyledButton } from "./style";

export interface IButtonProps {
    id: string;
    text: string;
    type: "button" | "submit" | "reset";
}

export const Button: FC<IButtonProps> = ({ text, type }) => {
    return <StyledButton type={type}>{text}</StyledButton>;
};
