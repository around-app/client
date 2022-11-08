import { SvgIcon } from "@mui/material";
import React from "react";
import { Colors } from "../../../constants/Colors";

export const HomeIcon = () => (
    <SvgIcon>
        <path
            d="M15 19V15H19L19.001 19H15ZM19 13H15C13.897 13 13 13.897 13 15V19C13 20.103 13.897 21 15 21H19C20.103 21 21 20.103 21 19V15C21 13.897 20.103 13 19 13ZM5 19V15H9L9.001 19H5ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 9V5H19L19.001 9H15ZM19 3H15C13.897 3 13 3.897 13 5V9C13 10.103 13.897 11 15 11H19C20.103 11 21 10.103 21 9V5C21 3.897 20.103 3 19 3ZM5 9V5H9L9.001 9H5ZM9 3H5C3.897 3 3 3.897 3 5V9C3 10.103 3.897 11 5 11H9C10.103 11 11 10.103 11 9V5C11 3.897 10.103 3 9 3Z"
            fill="inherit"
        />
        <linearGradient id="gradient">
            <stop offset="0%" stopColor={Colors.MALIBU} />
            <stop offset="0.934101" stopColor={Colors.BLUE} />
        </linearGradient>
    </SvgIcon>
);