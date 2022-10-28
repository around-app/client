import React, { FC } from "react";
import { StyledFormControlLabel } from "./style";
import { Checkbox, ICheckboxProps } from "../Checkbox/Checkbox";

export interface IFormControlLabelProps extends ICheckboxProps {
    label: string;
}

export const FormControlLabel: FC<IFormControlLabelProps> = ({
    onChange,
    checked,
    id,
    label,
}) => {
    return (
        <StyledFormControlLabel
            control={<Checkbox id={id} checked={checked} onChange={onChange} />}
            label={label}
        />
    );
};
