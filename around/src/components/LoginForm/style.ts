import styled from "@emotion/styled";
import { Colors } from "../../constants/Colors";

export const H1 = styled.h1({
    color: `${Colors.COLOR_LYNCH}`,
    fontFamily: "Lexend Deca",
    fontWeight: 400,
    fontSize: "4rem",
    lineHeight: "5rem",
    textAlign: "center",
});

export const Link = styled.a({
    fontFamily: "Montserrat",
    color: `${Colors.COLOR_BLUE}`,
    cursor: "pointer",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.063rem",
});

export const BoxForm = styled.div({
    display: "flex",
    flexDirection: "column",
    maxWidth: "18.75rem",
});

export const WraperElement = styled.div({
    paddingTop: "1rem",
    "&:first-of-type": {
        paddingTop: "0rem",
    },
});

export const BoxElements = styled.div({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});
