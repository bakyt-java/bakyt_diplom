import news_photo from "@/shared/images/news_view_photo.png";
import author_image from "@/shared/images/author.png";

export interface NewsCardsType {
	id: number;
	image: string;
	title: string;
	subtitle: string;
	authot_image: string;
	authour_name: string;
	create_time: string;
}

export const newsData: NewsCardsType[] = [
	{
		id: 1,
		image: news_photo,
		title:
			"Экс-форварды «Дордоя» ударно начинают. Старт нового сезона Премьер-Лиги",
		subtitle:
			"С приходом апреля стартовала и Самая лучшая лига. Чемпионат открывался в Канте и Оше, и как то началось буднично, никакого праздника.",
		create_time: "2 часа назад",
		authot_image: author_image,
		authour_name: "Чынгыз Анваров",
	},
	{
		id: 2,
		image: news_photo,
		title:
			"Экс-форварды «Дордоя» ударно начинают. Старт нового сезона Премьер-Лиги",
		subtitle:
			"С приходом апреля стартовала и Самая лучшая лига. Чемпионат открывался в Канте и Оше, и как то началось буднично, никакого праздника.",
		create_time: "2 часа назад",
		authot_image: author_image,
		authour_name: "Чынгыз Анваров",
	},
	{
		id: 3,
		image: news_photo,
		title:
			"Экс-форварды «Дордоя» ударно начинают. Старт нового сезона Премьер-Лиги",
		subtitle:
			"С приходом апреля стартовала и Самая лучшая лига. Чемпионат открывался в Канте и Оше, и как то началось буднично, никакого праздника.",
		create_time: "2 часа назад",
		authot_image: author_image,
		authour_name: "Чынгыз Анваров",
	},
	{
		id: 4,
		image: news_photo,
		title:
			"Экс-форварды «Дордоя» ударно начинают. Старт нового сезона Премьер-Лиги",
		subtitle:
			"С приходом апреля стартовала и Самая лучшая лига. Чемпионат открывался в Канте и Оше, и как то началось буднично, никакого праздника.",
		create_time: "2 часа назад",
		authot_image: author_image,
		authour_name: "Чынгыз Анваров",
	},
	{
		id: 5,
		image: news_photo,
		title:
			"Экс-форварды «Дордоя» ударно начинают. Старт нового сезона Премьер-Лиги",
		subtitle:
			"С приходом апреля стартовала и Самая лучшая лига. Чемпионат открывался в Канте и Оше, и как то началось буднично, никакого праздника.",
		create_time: "2 часа назад",
		authot_image: author_image,
		authour_name: "Чынгыз Анваров",
	},
	{
		id: 6,
		image: news_photo,
		title:
			"Экс-форварды «Дордоя» ударно начинают. Старт нового сезона Премьер-Лиги",
		subtitle:
			"С приходом апреля стартовала и Самая лучшая лига. Чемпионат открывался в Канте и Оше, и как то началось буднично, никакого праздника.",
		create_time: "2 часа назад",
		authot_image: author_image,
		authour_name: "Чынгыз Анваров",
	},
];
