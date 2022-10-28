import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Colors } from "../../constants/Colors";

export const StyledButton = styled(Button)({
    fontFamily: "Lexend Deca",
    width: "100%",
    color: `${Colors.COLOR_WHITE}`,
    fontSize: "1rem",
    borderRadius: "0.625rem",
    background: "linear-gradient(180deg, #7CB8F7 0%, #2A8BF2 100%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
    textTransform: "capitalize",
});
