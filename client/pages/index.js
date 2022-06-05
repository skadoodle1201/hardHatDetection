import Head from "next/head";
import { Typography } from "@mui/material";
import Header from "../components/common/Header";

import axios from "axios";
import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import Image from "next/image";

export default function Home() {
	useEffect(() => {
		axios.get(`http://127.0.0.1:8000/api/users/`).then((res) => {
			console.log(res.data);
		});
	});
	return (
		<>
			<Head>
				<title>Home Page</title>
				<meta
					name="description"
					content="Welcome To Hard Hat Detection Home Page"
				/>
			</Head>
			<Header />
			<main>
				<div className="bs-banner">
					<div className="container">
						<div className="banner-info">
							<Typography variant="h2">
								Welcome to Hard Hat Detection
								<Image
									width="50px"
									height="50px"
									alt="Hard hat"
									title="Hard hat"
									className="logo-image"
									src={`/images/safety-helmet.png`}
								/>
							</Typography>
							<Typography variant="subtitle1">Please Login</Typography>
						</div>
						<div className="bs-panel">
							<LoginForm />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
