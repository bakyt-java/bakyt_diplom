import { RouteProps } from "react-router-dom";

import {
	AboutUsView,
	AssistsView,
	BombersView,
	MainView,
	NewsDetailedView,
	NewsView,
	NotFoundView,
	TournamentTableView,
	TournamentsView,
} from "@/views";

export enum AppRoutes {
	MAIN = "MAIN",
	NOT_FOUND = "NOT_FOUND",
	ABOUT_US = "ABOUT_US",
	NEWS = "NEWS",
	NEWS_DETAILED = "NEWS_DETAILED",
	TOURNAMENT_TABLE = "TOURNAMENT_TABLE",
	TOURNAMENT = "TOURNAMENT",
	BOMBERS = "BOMBERS",
	ASSISTS = "ASSISTS",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.NOT_FOUND]: "*",
	[AppRoutes.ABOUT_US]: "/about_us",
	[AppRoutes.NEWS]: "/news",
	[AppRoutes.NEWS_DETAILED]: "/news_detailed/:id",
	[AppRoutes.TOURNAMENT_TABLE]: "/tournament_table",
	[AppRoutes.TOURNAMENT]: "/tournaments",
	[AppRoutes.BOMBERS]: "/bombers",
	[AppRoutes.ASSISTS]: "/assists",
};

export const routeConfigPublic: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.MAIN,
		element: <MainView />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.NOT_FOUND,
		element: <NotFoundView />,
	},
	[AppRoutes.ABOUT_US]: {
		path: RoutePath.ABOUT_US,
		element: <AboutUsView />,
	},
	[AppRoutes.NEWS]: {
		path: RoutePath.NEWS,
		element: <NewsView />,
	},
	[AppRoutes.NEWS_DETAILED]: {
		path: RoutePath.NEWS_DETAILED,
		element: <NewsDetailedView />,
	},
	[AppRoutes.TOURNAMENT_TABLE]: {
		path: RoutePath.TOURNAMENT_TABLE,
		element: <TournamentTableView />,
	},
	[AppRoutes.TOURNAMENT]: {
		path: RoutePath.TOURNAMENT,
		element: <TournamentsView />,
	},
	[AppRoutes.ASSISTS]: {
		path: RoutePath.ASSISTS,
		element: <AssistsView />,
	},
	[AppRoutes.BOMBERS]: {
		path: RoutePath.BOMBERS,
		element: <BombersView />,
	},
};
