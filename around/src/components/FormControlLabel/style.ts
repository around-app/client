import styled from "@emotion/styled";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Colors } from "../../constants/Colors";

export const StyledFormControlLabel = styled(FormControlLabel)({
    "& .MuiTypography-root": {
        color: `${Colors.COLOR_LYNCH}`,
        fontFamily: "Montserrat",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: 500,
    },
});
