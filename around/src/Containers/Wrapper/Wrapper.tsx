import React, { FC, ReactNode } from "react";
import { StyledWraper } from "./style";

interface IWrapperProps {
    children: ReactNode;
}

export const Wrapper: FC<IWrapperProps> = ({ children }) => (
    <StyledWraper>{children}</StyledWraper>
);
