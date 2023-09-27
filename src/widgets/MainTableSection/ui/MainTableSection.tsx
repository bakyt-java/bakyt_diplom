import React from "react";
import { useNavigate } from "react-router-dom";

import { TableV1 } from "@/shared/ui";
import { newsData, rows } from "../constants";

import cls from "./MainTableSeaction.module.scss";

export const MainTableSection = () => {
	const navigate = useNavigate();
	return (
		<article className={cls.main_table_section}>
			<article className={cls.news_main_container}>
				<div className={cls.news_header}>
					<span className={cls.span}></span>
					<p className={cls.last_news}>Последние новости</p>
				</div>
				<div className={cls.news_container}>
					{newsData.map((news) => (
						<div
							className={cls.news_card}
							key={news.id}
						>
							<div className={cls.image_container}>
								<img
									src={news.newsImage}
									alt='image'
								/>
							</div>
							<div className={cls.title_container}>
								<p className={cls.time}>{news.time}</p>
								<p className={cls.title}>{news.title}</p>
								<p className={cls.subtitle}>{news.subtitle}</p>
							</div>
						</div>
					))}
				</div>
				<div
					className={cls.button}
					onClick={() => navigate("/news")}
				>
					Смореть все новости
				</div>
			</article>
			<article className={cls.table_container}>
				<div>
					<TableV1
						rows={rows}
						buttonTitle='Смотреть полную таблицу'
						path='/tournament_table'
						tableTitle='Турнирная таблица'
					/>
				</div>
				<div>
					<TableV1
						rows={rows}
						buttonTitle='Смотреть полную статистику'
						path='/bombers'
						tableTitle='Бомбардиры КПЛ 2022/23'
					/>
				</div>
			</article>
		</article>
	);
};
