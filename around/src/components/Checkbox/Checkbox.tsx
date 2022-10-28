import React, { FC } from "react";
import { StyledCheckbox } from "./style";

export interface ICheckboxProps {
    id: string;
    checked: boolean;
    onChange: (event: React.SyntheticEvent) => void;
}

export const Checkbox: FC<ICheckboxProps> = (props) => {
    return <StyledCheckbox {...props} />;
};
