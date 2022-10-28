import React, { FC } from "react";
import { StyledTextField } from "./style";

export interface ITextFieldProps {
    type: string;
    id: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent) => void;
    value: string;
    error?: boolean;
    helperText?: string | false;
}

export const TextField: FC<ITextFieldProps> = (props) => {
    return <StyledTextField {...props} />;
};
