import React, { FC } from "react";
import { StyledLogin, WrapperForm } from "./style";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const Login: FC = () => {
    return (
        <StyledLogin>
            <WrapperForm>
                <LoginForm />
            </WrapperForm>
        </StyledLogin>
    );
};
