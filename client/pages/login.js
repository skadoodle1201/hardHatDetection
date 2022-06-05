import { Typography } from "@mui/material";
import Header from "../components/common/Header";
import LoginForm from "../components/LoginForm";

const Login = () => {
	return (
		<div className="tpl-progress-page">
			<Header />
			<main>
				<div className="cm-container">
					<div className="lyt-tnc">
						<div className="t-head cm-text-left-m">
							<Typography variant="h2">Login</Typography>
						</div>
					</div>
					<div className="lyt-personal-detail">
						<LoginForm />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Login;
