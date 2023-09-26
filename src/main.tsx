import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./app/App";

import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import ErrorBoundary from "./app/providers/ErrorBoundary/ErrorBoundary";
import { theme } from "./app/providers/ThemeProvider/constants";
import { SnackBarProvider } from "./app/providers/SnackBarProvider/ui/SnackBar";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider theme={theme}>
				<SnackBarProvider>
					<App />
				</SnackBarProvider>
			</ThemeProvider>
		</ErrorBoundary>
		<CssBaseline />
	</BrowserRouter>,
);
