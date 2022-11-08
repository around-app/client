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

export type IconType =
    | "home"
    | "chat"
    | "contact"
    | "notifications"
    | "calender"
    | "settings"
    | "log out";

interface IListItemProps {
    typeIcon: IconType;
    text: string;
}

const getIcon = (icon: IconType) => {
    switch (icon) {
        case "home":
            return <HomeIcon />;
        case "chat":
            return <ChatIcon />;
        case "contact":
            return <ContactIcon />;
        case "notifications":
            return <NotificationsIcon />;
        case "calender":
            return <CalenderIcon />;
        case "settings":
            return <SettingsIcon />;
        default:
            return <LogOutIcon />;
    }
};

export const ListItem: FC<IListItemProps> = ({ typeIcon, text }) => {
    return (
        <StyledListItem>
            <StyledListItemButton disableRipple>
                <ListItemIcon>{getIcon(typeIcon)}</ListItemIcon>
                <ListItemText primary={text} />
            </StyledListItemButton>
        </StyledListItem>
    );
};
