import React, { FC } from "react";
import {
    StyledLogin,
    WrapperForm,
    BoxForm,
    WraperElement,
    H1,
    BoxElements,
    Link,
} from "./style";
import { FormControlLabel } from "../../components/FormControlLabel";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
    login: yup.string().required("Login is required"),
    password: yup.string().required("Password is required"),
});

export const Login: FC = () => {
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
            remember: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <StyledLogin>
            <WrapperForm>
                <BoxForm>
                    <form onSubmit={formik.handleSubmit}>
                        <WraperElement>
                            <H1>Sign in</H1>
                        </WraperElement>
                        <WraperElement>
                            <TextField
                                id="login"
                                type="text"
                                placeholder="Login"
                                onChange={formik.handleChange}
                                value={formik.values.login}
                                error={
                                    formik.touched.login &&
                                    !!formik.errors.login
                                }
                                helperText={
                                    formik.touched.login && formik.errors.login
                                }
                            />
                        </WraperElement>
                        <WraperElement>
                            <TextField
                                id="password"
                                type="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                error={
                                    formik.touched.password &&
                                    !!formik.errors.password
                                }
                                helperText={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                            />
                        </WraperElement>
                        <WraperElement>
                            <BoxElements>
                                <FormControlLabel
                                    id="remember"
                                    label="Remember me"
                                    onChange={formik.handleChange}
                                    checked={formik.values.remember}
                                />
                                <Link href="#">Forgot password?</Link>
                            </BoxElements>
                        </WraperElement>
                        <WraperElement>
                            <Button text="Login" type="submit" id="sumbit" />
                        </WraperElement>
                    </form>
                </BoxForm>
            </WrapperForm>
        </StyledLogin>
    );
};
