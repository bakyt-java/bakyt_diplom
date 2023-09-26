import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/app/styles/main.scss";',
				implementation: sass,
			},
		},
	},
});
