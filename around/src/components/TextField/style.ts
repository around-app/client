import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { Colors } from "../../constants/Colors";

export const StyledTextField = styled(TextField)({
    width: "100%",

    "& .MuiInputBase-root": {
        fontFamily: "Lexend Deca",
        color: `${Colors.LYNCH}`,
        borderRadius: "0.7rem",
        fontSize: "0.9rem",
        background: `${Colors.WHITE}`,

        "& fieldset": {
            border: "none",
        },

        "&.Mui-focused fieldset": {
            border: `0.125rem solid ${Colors.BLUE}`,
        },

        "&.Mui-error fieldset": {
            border: `0.125rem solid ${Colors.FLAMINGO}`,
        },
    },
});
