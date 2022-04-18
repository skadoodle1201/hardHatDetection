import { Form, Formik } from "formik";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const LoginForm = () => {
    const initalValues = {
        email: "",
        password: "",
    };

    const validationSchema = async (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        if (!values.password) {
            errors.password = "Required";
        } else if (values.password.length < 6 && values.password.length)
            console.log(errors);
        return errors;
    };

    return (
        <div className="loginForm">
            <h1>Sign In </h1>
            <Formik initialValues={initalValues} validate={validationSchema}>
                {(props) => {
                    console.log(props.isValid);
                    return (
                        <Form onSubmit={props.handleSubmit}>
                            <TextField
                                name="email"
                                label="Email"
                                value={props.values.email}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                fullWidth
                                className="m-b"
                                helperText={
                                    props.touched.email && props.errors.email
                                        ? props.errors.email
                                        : ""
                                }
                                error={
                                    !!props.touched.email &&
                                    !!props.errors.email
                                }
                            />
                            <TextField
                                name="password"
                                label="Password"
                                variant="outlined"
                                value={props.values.password}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                fullWidth
                                helperText={
                                    props.touched.password &&
                                    props.errors.password
                                        ? props.errors.password
                                        : ""
                                }
                                error={
                                    !!props.touched.password &&
                                    !!props.errors.password
                                }
                                className="m-b"
                            />
                            <Button
                                disabled={!props.isValid}
                                variant="contained"
                                className="p"
                                fullWidth
                            >
                                Sign In{" "}
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default LoginForm;
