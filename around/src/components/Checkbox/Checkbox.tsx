import React, { FC } from "react";
import { ICheckbox } from "../../Interfaces/ICheckbox";
import { StyledCheckbox } from "./style";

export const Checkbox: FC<ICheckbox> = ({ id, checked, change }) => {
    return <StyledCheckbox id={id} checked={checked} onChange={change} />;
};
