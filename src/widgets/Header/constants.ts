interface NavigationType {
	title: string;
	path: string;
	id: string | number;
}

export const navigation: NavigationType[] = [
	{
		title: "Клубы",
		path: "/",
		id: 1,
	},
	{
		title: "Турниры",
		path: "/tournaments",
		id: 2,
	},
	{
		title: "Новости",
		path: "/news",
		id: 3,
	},
	{
		title: "Турнирная таблица",
		path: "/tournament_table",
		id: 4,
	},
	{
		title: "О нас",
		path: "/about_us",
		id: 5,
	},
	{
		title: "Контакты",
		path: "/",
		id: 6,
	},
];
