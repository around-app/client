import React, { FC } from "react";
import { ItemsType, ListItem } from "../../components/ListItem";
import {
    ElementBox,
    LogOutBox,
    NavContainer,
    StyledNavigation,
    ItemBox,
    WrapperItem,
} from "./style";

export const Navigation = () => {
    const listItems: ItemsType[] = [
        "home",
        "chat",
        "contact",
        "notifications",
        "calender",
        "settings",
    ];

    const items = listItems.map((item) => (
        <WrapperItem key={item}>
            <ListItem nameItem={item} />
        </WrapperItem>
    ));

    return (
        <StyledNavigation>
            <NavContainer>
                <ItemBox>
                    <ElementBox>{items}</ElementBox>
                </ItemBox>
                <LogOutBox>
                    <ListItem nameItem="log out" />
                </LogOutBox>
            </NavContainer>
        </StyledNavigation>
    );
};
