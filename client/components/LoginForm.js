import { useFormik } from "formik";
import { useRouter } from "next/Router";
import { Button, TextField } from "@mui/material";

const LoginForm = () => {
	const router = useRouter();
	const formikOnboarding = useFormik({
		initialValues: {
			email: "",
			password: "",
		},

		validate: (values) => {
			const errors = {};
			if (!values.email) {
				errors.email = "Email is Required ";
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
			) {
				errors.email = "Invalid email address";
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
	const handleSignUp = () => {
		router.push("/sign-up");
	};
	return (
		<form onSubmit={formikOnboarding.handleSubmit}>
			<div className="bs-form">
				<div className="form-wrap">
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
								formikOnboarding.touched.email && formikOnboarding.errors.email
									? true
									: false
							}
							helperText={
								formikOnboarding.touched.email && formikOnboarding.errors.email
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
							<span className="cm-line-break">
								By proceeding you agree to accept all applicable Term &amp;
								Conditions and Privacy Policy
							</span>{" "}
							<span>If you don't have a account please click here!</span>
							<Button
								type="button"
								className="cm-link"
								color="primary"
								style={{ marginTop: "-3px" }}
								onClick={handleSignUp}
							>
								Sign Up
							</Button>
						</p>
					</div>
					<Button
						variant="contained"
						type="submit"
						className="btn btn-default"
						disabled={!(formikOnboarding.dirty && formikOnboarding.isValid)}
					>
						Proceed
					</Button>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
