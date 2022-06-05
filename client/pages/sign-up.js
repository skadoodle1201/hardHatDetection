import { Button, TextField, Typography } from "@mui/material";
import Header from "../components/common/Header";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const SignUp = () => {
	const router = useRouter();
	const formikOnboarding = useFormik({
		initialValues: {
			email: "",
			username: "",
			password: "",
		},

		validate: (values) => {
			const errors = {};

			if (!values.email) {
				errors.email = "Email is Required";
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
			) {
				errors.email = "Invalid email address";
			}

			if (!values.username) {
				errors.username = "Username is Required ";
			} else if (values.username.length < 6 && values.username.length) {
				errors.username = "Invalid username address";
			}

			if (!values.password) {
				errors.password = "Password is Required";
			} else if (values.password.length < 8 && values.password.length) {
				errors.password = "Invalid password address";
			}

			return errors;
		},

		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const handleLogin = () => {
		router.push("/login");
	};
	return (
		<div className="tpl-progress-page step2">
			<Header />
			<main>
				<div className="cm-container">
					<div className="lyt-tnc">
						<div className="t-head cm-text-left-m">
							<Typography variant="h2">Sign Up</Typography>
						</div>
					</div>
					<div className="lyt-personal-detail">
						<form>
							<div className="bs-form">
								<div className="form-wrap">
									<div className="form-group">
										<TextField
											label="Username"
											type="text"
											variant="standard"
											fullWidth
											name="username"
											value={formikOnboarding.values.username}
											onChange={formikOnboarding.handleChange}
											onBlur={formikOnboarding.handleBlur}
											error={
												formikOnboarding.touched.username &&
												formikOnboarding.errors.username
													? true
													: false
											}
											helperText={
												formikOnboarding.touched.username &&
												formikOnboarding.errors.username
													? formikOnboarding.errors.username
													: null
											}
										/>
									</div>
									<div className="form-group">
										<TextField
											label="Email"
											type="text"
											variant="standard"
											fullWidth
											name="email"
											value={formikOnboarding.values.email}
											onChange={formikOnboarding.handleChange}
											onBlur={formikOnboarding.handleBlur}
											error={
												formikOnboarding.touched.email &&
												formikOnboarding.errors.email
													? true
													: false
											}
											helperText={
												formikOnboarding.touched.email &&
												formikOnboarding.errors.email
													? formikOnboarding.errors.email
													: null
											}
										/>
									</div>
									<div className="form-group">
										<TextField
											label="Password"
											type="text"
											variant="standard"
											fullWidth
											name="password"
											value={formikOnboarding.values.password}
											onChange={formikOnboarding.handleChange}
											onBlur={formikOnboarding.handleBlur}
											error={
												formikOnboarding.touched.password &&
												formikOnboarding.errors.password
													? true
													: false
											}
											helperText={
												formikOnboarding.touched.password &&
												formikOnboarding.errors.password
													? formikOnboarding.errors.password
													: null
											}
										/>
									</div>
								</div>
								<div className="form-action">
									<div className="form-more-links">
										<p className="meta-text">
											<span>If you Already have an account please</span>
											<Button
												type="button"
												className="cm-link"
												color="primary"
												style={{ marginTop: "-3px", marginLeft: "-8px" }}
												onClick={handleLogin}
											>
												Login
											</Button>
										</p>
									</div>
									<Button
										variant="contained"
										type="submit"
										className="btn btn-default"
										disabled={
											!(formikOnboarding.dirty && formikOnboarding.isValid)
										}
									>
										Proceed
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</main>
		</div>
	);
};

export default SignUp;
