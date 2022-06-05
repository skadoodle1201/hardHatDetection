import "../styles/custom.scss";
import { customTheme } from "../common/helpers";
import { ThemeProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={customTheme}>
			<Component {...pageProps} />;
		</ThemeProvider>
	);
}

export default MyApp;
