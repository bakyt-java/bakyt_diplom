import { Layout } from "@/shared/ui";

import { newsData } from "../constants";

import main_photo from "@/shared/images/detailed_news_photo.png";

import cls from "./NewsDetailedView.module.scss";

const NewsDetailedView = () => {
	return (
		<section>
			<Layout large>
				<h2 className={cls.main_title}>
					Кубок Азии (U-20): Кыргызстан завершает турнир с огненным матчем
					против Китая
				</h2>
				<div className={cls.image_container}>
					<img
						src={main_photo}
						alt='detailed photo'
						className={cls.image}
					/>
					<p className={cls.image_title}>Опубликованно 07.04.2023 | 09:25</p>
				</div>
				<p className={cls.subtitle}>
					18-й по счету Кубок Азии по футболу, в котором примет участие и
					сборная Кыргызстана, пройдет в Катаре с 12 января по 10 февраля 2024
					года с участием 24 национальных команд, сообщила в Twitter-е Азиатская
					конфедерация футбола (AFC).
				</p>
				<p className={cls.subtitle}>
					Турнир пройдет с 12 января по 10 февраля 2024 года с участием 24
					национальных сборных. Он будет проходить на восьми стадионах, в том
					числе на шести стадионах, на которых проходил чемпионат мира по
					футболу 2022 года в Катаре, - отмечается в сообщении, которое приводит
					РИА Новости.
				</p>
				<h5 className={cls.title}>Кыргызстан узнает соперников 11 мая</h5>
				<p className={cls.subtitle}>
					В заявлении АФК подтверждается, что жеребьевка турнира состоится в
					Оперном театре в Дохе 11 мая в 17:00 по бишкекскому времени, а
					расписание матчей турнира будет объявлено вскоре после жеребьевки.
				</p>
				<p className={cls.subtitle}>
					Чтобы было удобно болельщикам, матч открытия 18-го Кубка Азии
					состоится в пятницу (выходной день в Катаре - прим.), а финальный матч
					пройдет в выходные, - отметили в конфедерации.
				</p>
				<h5 className={cls.title}>От Китая до Катара</h5>
				<p className={cls.subtitle}>
					Кубок Азии по футболу 2023 года в Катаре будет проходить в течение 30
					дней, что на два дня больше, чем предыдущий турнир в 2019 году в ОАЭ,
					чтобы улучшить впечатления от футбола болельщиков на азиатском
					континенте, а также повысить статус турнира и его коммерческую
					ценность.
				</p>
				<p className={cls.subtitle}>
					Изначально турнир должен был принимать Китай, но в мае 2022 года
					страна отказалась от проведения турнира из-за вспышки COVID-19.
				</p>

				<h5 className={cls.news_title}>Последние новости</h5>
				<article className={cls.card_wrapper}>
					{newsData.map((item) => (
						<div
							className={cls.card_container}
							key={item.title}
						>
							<div className={cls.image_container}>
								<img
									src={item.image}
									alt={item.title}
								/>
							</div>
							<p className={cls.image_des}>{item.title}</p>
						</div>
					))}
				</article>
			</Layout>
		</section>
	);
};

export default NewsDetailedView;
