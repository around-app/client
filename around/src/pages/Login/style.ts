import styled from "@emotion/styled";
import { Colors } from "../../constants/Colors";

export const StyledLogin = styled.div({
    background: `${Colors.LILAC}`,
    height: "100vh",
});

export const WrapperForm = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
});

export const H1 = styled.h1({
    color: `${Colors.LYNCH}`,
    fontFamily: "Lexend Deca",
    fontWeight: 400,
    fontSize: "4rem",
    lineHeight: "5rem",
    textAlign: "center",
});

export const Link = styled.a({
    fontFamily: "Montserrat",
    color: `${Colors.BLUE}`,
    cursor: "pointer",
    fontWeight: 400,
    fontSize: "0.9rem",
    lineHeight: "1rem",
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
