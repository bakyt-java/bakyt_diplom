import { AppRouter } from "./providers/Router/ui/Router";
import { Footer, Header } from "@/widgets";

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<AppRouter />
			</main>
			<Footer />
		</>
	);
};
