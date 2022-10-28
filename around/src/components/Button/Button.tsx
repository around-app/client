import React, { FC } from "react";
import { StyledButton } from "./style";
import { IButtonProps } from "../../Interfaces/IButtonProps";

export const Button: FC<IButtonProps> = ({ text, type }) => {
    return <StyledButton type={type}>{text}</StyledButton>;
};
