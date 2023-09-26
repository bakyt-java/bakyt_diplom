import table_1 from "@/shared/images/table_1.png";
import table_2 from "@/shared/images/table_2.png";
import table_3 from "@/shared/images/table_3.png";
import table_4 from "@/shared/images/table_4.png";
import table_5 from "@/shared/images/table_5.png";
import table_6 from "@/shared/images/table_6.png";
import table_7 from "@/shared/images/table_7.png";
import table_8 from "@/shared/images/table_8.png";
import table_9 from "@/shared/images/table_9.png";
import table_10 from "@/shared/images/table_10.png";

export interface TournamentsDataType {
	command: string;
	oponent: string;
	fcImage: string;
	fcImage2: string;
	id: number;
	day: string;
	time: string;
}
export const tournamentsData: TournamentsDataType[] = [
	{
		id: 1,
		command: "Дордой",
		fcImage: table_1,
		oponent: "Алга",
		fcImage2: table_2,
		day: "Сб/22/04",
		time: "19:00",
	},
	{
		id: 2,
		command: "Абдыш-Ата",
		fcImage: table_3,
		oponent: "Алай",
		fcImage2: table_4,
		day: "Сб/22/04",
		time: "19:00",
	},

	{
		id: 3,
		command: "Нефтчи",
		fcImage: table_5,
		oponent: "Талант",
		fcImage2: table_6,
		day: "Сб/22/04",
		time: "19:00",
	},

	{
		id: 4,
		command: "ОшТУ",
		fcImage: table_7,
		oponent: "Мурас Ю",
		fcImage2: table_8,
		day: "Сб/22/04",
		time: "19:00",
	},
	{
		id: 5,
		command: "Кара-Балта",
		fcImage: table_9,
		oponent: "Илбирс",
		fcImage2: table_10,
		day: "Сб/22/04",
		time: "19:00",
	},
];

interface MainTournamentsDataType {
	id: number;
	title: string;
	tour: TournamentsDataType[];
}

export const mainTournamentsData: MainTournamentsDataType[] = [
	{
		id: 1,
		title: "Тур 1 из 27",
		tour: tournamentsData,
	},
	{
		id: 2,
		title: "Тур 2 из 27",
		tour: tournamentsData,
	},
	{
		id: 3,
		title: "Тур 3 из 27",
		tour: tournamentsData,
	},
	{
		id: 4,
		title: "Тур 4 из 27",
		tour: tournamentsData,
	},
	{
		id: 5,
		title: "Тур 5 из 27",
		tour: tournamentsData,
	},
];
