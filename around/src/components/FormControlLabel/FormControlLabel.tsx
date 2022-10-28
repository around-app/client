import React, { FC } from "react";
import { StyledFormControlLabel } from "./style";
import { IFormControlLabelProps } from "../../Interfaces/IFormControlLabelProps";
import { Checkbox } from "../Checkbox/Checkbox";

export const FormControlLabel: FC<IFormControlLabelProps> = ({
    change,
    checked,
    id,
    label,
}) => {
    return (
        <StyledFormControlLabel
            control={<Checkbox id={id} checked={checked} change={change} />}
            label={label}
        />
    );
};
