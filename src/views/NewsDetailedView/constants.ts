import news_photo from "@/shared/images/news_photo.png";
import news_photo2 from "@/shared/images/news_photo_2.png";
import news_photo3 from "@/shared/images/news_photo_3.png";

interface NewsDataType {
	image: string;
	title: string;
}

export const newsData: NewsDataType[] = [
	{
		image: news_photo,
		title:
			"Экс-форварды «Дордоя» ударно начинают. Старт нового сезона Премьер-Лиги",
	},
	{
		image: news_photo2,
		title:
			"Кубок Азии (U-20): Кыргызстан завершает турнир с огненным матчем против Китая",
	},
	{
		image: news_photo3,
		title: "«Алай» - обладатель Суперкубка Кыргызстана",
	},
];
