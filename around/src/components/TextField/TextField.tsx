import React, { FC } from "react";
import { ITextFieldProps } from "../../Interfaces/ITextFieldProps";
import { StyledTextField } from "./style";

export const TextField: FC<ITextFieldProps> = ({
    type,
    placeholder,
    change,
    value,
    id,
    error,
    helperText,
}) => {
    return (
        <StyledTextField
            id={id}
            helperText={helperText}
            type={type}
            placeholder={placeholder}
            onChange={change}
            value={value}
            error={error}
        />
    );
};
