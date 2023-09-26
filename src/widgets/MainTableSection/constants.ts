import new_image_1 from "@/shared/images/news_photo.png";
import new_image_2 from "@/shared/images/news_photo_2.png";
import new_image_3 from "@/shared/images/news_photo_3.png";

interface NewDataType {
	newsImage: string;
	time: string;
	title: string;
	subtitle: string;
	id: number;
}

export const newsData: NewDataType[] = [
	{
		id: 1,
		newsImage: new_image_1,
		time: "8 марта 2023 19:34",
		title:
			"Экс-форварды «Дордоя» ударно начинают. Старт нового сезона Премьер-Лиги",
		subtitle:
			"С приходом апреля стартовала и Самая лучшая лига. Чемпионат открывался в Канте и Оше, и как то началось буднично, никакого праздника.",
	},
	{
		id: 2,
		newsImage: new_image_2,
		time: "8 марта 2023 19:34",
		title:
			"Кубок Азии (U-20): Кыргызстан завершает турнир с огненным матчем против Китая",
		subtitle:
			"С приходом апреля стартовала и Самая лучшая лига. Чемпионат открывался в Канте и Оше, и как то началось буднично, никакого праздника.",
	},
	{
		id: 3,
		newsImage: new_image_3,
		time: "8 марта 2023 19:34",
		title: "«Алай» - обладатель Суперкубка Кыргызстана",
		subtitle:
			"Футбольный клуб Оша 'Алай' сегодня на домашнем стадионе имени А. Суюмбаева выиграл Суперкубок Кыргызстана по футболу.",
	},
];

function createData(club: string, В: number, П: number, Н: number, О: number) {
	return { club, В, П, Н, О };
}

export const rows = [
	createData("Дордой", 10, 5, 2, 30),
	createData("Алга", 9, 5, 2, 30),
	createData("Абдыш-Ата", 8, 5, 2, 30),
	createData("Алай", 7, 5, 2, 30),
	createData("Нефтчи", 6, 5, 2, 30),
	createData("Илбирс", 6, 5, 2, 30),
];
