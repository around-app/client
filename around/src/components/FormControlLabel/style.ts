import styled from "@emotion/styled";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Colors } from "../../constants/Colors";

export const StyledFormControlLabel = styled(FormControlLabel)({
    "& .MuiTypography-root": {
        color: `${Colors.LYNCH}`,
        fontFamily: "Montserrat",
        fontSize: "0.9rem",
        lineHeight: "1.25rem",
        fontWeight: 500,
    },
});
