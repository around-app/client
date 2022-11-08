import React, { FC } from "react";
import { IconType, ListItem } from "../../components/ListItem";
import {
    ElementBox,
    LogOutBox,
    NavContainer,
    StyledNavigation,
    ItemBox,
    WrapperItem,
} from "./style";

const listItems: IconType[] = [
    "home",
    "chat",
    "contact",
    "notifications",
    "calender",
    "settings",
];

export const Navigation = () => {
    const items = listItems.map((item) => (
        <WrapperItem key={item}>
            <ListItem typeIcon={item} text={item} />
        </WrapperItem>
    ));

    return (
        <StyledNavigation>
            <NavContainer>
                <ItemBox>
                    <ElementBox>{items}</ElementBox>
                </ItemBox>
                <LogOutBox>
                    <ListItem typeIcon="log out" text="log out" />
                </LogOutBox>
            </NavContainer>
        </StyledNavigation>
    );
};
