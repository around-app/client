import styled from "@emotion/styled";
import { Colors } from "../../constants/Colors";

export const StyledNavigation = styled.div({
    background: `${Colors.LILAC}`,
    height: "100vh",
    display: "flex",
});

export const NavContainer = styled.nav({
    background: `${Colors.WHITE}`,
    display: "flex",
    flexDirection: "column",
    boxShadow:
        "14.0351px 0px 25px rgba(86, 128, 248, 0.03), 35.0877px 0px 70px rgba(86, 128, 248, 0.05), 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02)",
});

export const ItemBox = styled.div({
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
});

export const ElementBox = styled.div({});

export const LogOutBox = styled.div({
    flexGrow: 0,
    padding: "1rem 0rem",
});

export const WrapperItem = styled.div({
    padding: "0.5rem 0rem",
});
