import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Colors } from "../../constants/Colors";
import { Gradients } from "../../constants/Gradients";

export const StyledButton = styled(Button)({
    fontFamily: "Lexend Deca",
    width: "100%",
    color: `${Colors.WHITE}`,
    fontSize: "1rem",
    borderRadius: "0.6rem",
    background: `${Gradients.BLUE}`,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
    textTransform: "capitalize",
});
