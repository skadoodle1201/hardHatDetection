import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>

					{/* Import Custom Stylesheets with Global Definitions */}
					<link href={`/css/fonts.css`} rel="stylesheet" />
					<link href={`/css/icons.css`} rel="stylesheet" />
				</Head>

				<body>
					<Main />

					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
