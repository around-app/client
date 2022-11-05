import styled from "@emotion/styled";
import { ListItem, ListItemButton } from "@mui/material";
import { Colors } from "../../constants/Colors";

export const StyledListItem = styled(ListItem)({
    textTransform: "uppercase",
    position: "relative",
    color: `${Colors.LYNCH}`,

    "&:hover": {
        color: `${Colors.BLUE}`,

        "& svg": {
            fill: "url(#gradient)",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            left: 0,
            top: 0,
            width: "0.2rem",
            height: "2.5rem",
            background: `${Colors.BLUE}`,
            boxShadow:
                "1px 0px 10px rgba(42, 139, 242, 0.45), 0px 0px 10px rgba(42, 139, 242, 0.55), 4px 0px 25px rgba(42, 139, 242, 0.75)",
        },
    },
});

export const StyledListItemButton = styled(ListItemButton)({
    padding: "0rem 2.5rem",

    "&:hover": {
        background: "none",
    },
});
