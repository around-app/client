import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { Colors } from "../../constants/Colors";

export const StyledTextField = styled(TextField)({
    width: "100%",

    "& .MuiInputBase-root": {
        fontFamily: "Lexend Deca",
        color: `${Colors.COLOR_LYNCH}`,
        borderRadius: "0.625rem",
        fontSize: "0.875rem",
        background: `${Colors.COLOR_WHITE}`,

        "& fieldset": {
            border: "none",
        },

        "&.Mui-focused fieldset": {
            border: `0.125rem solid ${Colors.COLOR_BLUE}`,
        },

        "&.Mui-error fieldset": {
            border: `0.125rem solid ${Colors.COLOR_FLAMINGO}`,
        },
    },
});
