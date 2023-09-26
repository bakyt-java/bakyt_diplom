import React from "react";

import about_us_photo from "@/shared/images/about_us_photo.png";

import cls from "./AboutUsView.module.scss";
import { Layout } from "@/shared/ui";
const AboutUsView = () => {
	return (
		<section className={cls.about_us_view}>
			<Layout large>
				<article className={cls.about}>
					<div className={cls.image_container}>
						<img
							className={cls.image}
							src={about_us_photo}
							alt='about us photo'
						/>
					</div>
					<h1 className={cls.title}>О нас </h1>
					<p className={cls.subtitle}>
						Академия детско-юношеского футбола, футбольного клуба «Дордой»
						представляет собой современный спортивный комплекс, который включает
						в себя два футбольных поля с искусственным покрытием, два
						мини-футбольных поля, спортивный зал для занятий в зимний период,
						тёплые раздевалки и др.. В футбольной академии занимаются дети с 7
						до 16 лет, после чего лучшие из воспитанников продолжают обучение в
						юниорской команде (U-17), откуда идёт непосредственный отбор в
						дублирующий и основной составы футбольного клуба «Дордой». С
						воспитанниками футбольной академии «Дордой» работают одни из лучших
						тренеров нашей страны, имеющие тренерские лицензии категорий «A»,
						«B» и «С». Наши воспитанники являются чемпионами и призёрами
						Кыргызской Республики и города Бишкек, а также постоянно
						международных детско-юношеских турнирах.
					</p>
				</article>
			</Layout>
		</section>
	);
};

export default AboutUsView;
