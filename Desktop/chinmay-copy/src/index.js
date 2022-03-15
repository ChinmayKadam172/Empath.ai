import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/system";
import App from "./Components/App";
import { theme } from "./theme";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<ThemeProvider theme={theme}>
		<StrictMode>
			<App />
		</StrictMode>
	</ThemeProvider>,
	rootElement
);
