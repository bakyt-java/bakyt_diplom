import React from "react";

import cls from "./NewsCard.module.scss";
import { NewsCardsType } from "@/views/NewsView/constants";
import { useNavigate } from "react-router-dom";

export const NewsCard: React.FC<NewsCardsType> = ({
	id,
	image,
	title,
	subtitle,
	create_time,
	authot_image,
	authour_name,
}) => {
	const navigate = useNavigate();

	return (
		<article
			className={cls.news_card_container}
			onClick={() => navigate(`/news_detailed/${id}`)}
		>
			<div className={cls.image_container}>
				<img
					className={cls.news_card_photo}
					src={image}
					alt=''
				/>
			</div>
			<p className={cls.title}>{title}</p>
			<p className={cls.subtitle}>{subtitle}</p>
			<div className={cls.author}>
				<div className={cls.author_data}>
					<img
						src={authot_image}
						alt=''
					/>
					<span>{authour_name}</span>
				</div>
				<p>{create_time}</p>
			</div>
		</article>
	);
};
