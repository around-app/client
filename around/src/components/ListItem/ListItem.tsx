import React, { FC } from "react";
import { StyledListItem, StyledListItemButton } from "./style";
import { ListItemIcon, ListItemText } from "@mui/material";
import { ChatIcon } from "../ui/icons/Chat";
import { HomeIcon } from "../ui/icons/Home";
import { ContactIcon } from "../ui/icons/Contact";
import { NotificationsIcon } from "../ui/icons/Notifications";
import { SettingsIcon } from "../ui/icons/Settings";
import { LogOutIcon } from "../ui/icons/LogOut";
import { CalenderIcon } from "../ui/icons/Calender";

export type ItemsType =
    | "home"
    | "chat"
    | "contact"
    | "notifications"
    | "calender"
    | "settings"
    | "log out";

interface IListItemProps {
    nameItem: ItemsType;
}

export const ListItem: FC<IListItemProps> = ({ nameItem }) => {
    let icon;

    switch (nameItem) {
        case "home":
            icon = <HomeIcon />;
            break;
        case "chat":
            icon = <ChatIcon />;
            break;
        case "contact":
            icon = <ContactIcon />;
            break;
        case "notifications":
            icon = <NotificationsIcon />;
            break;
        case "calender":
            icon = <CalenderIcon />;
            break;
        case "settings":
            icon = <SettingsIcon />;
            break;
        case "log out":
            icon = <LogOutIcon />;
    }

    return (
        <StyledListItem>
            <StyledListItemButton disableRipple>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={nameItem} />
            </StyledListItemButton>
        </StyledListItem>
    );
};
