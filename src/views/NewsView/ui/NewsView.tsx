import React from "react";

import cls from "./NewsView.module.scss";
import { Layout, NewsCard } from "@/shared/ui";
import { newsData } from "../constants";

const NewsView = () => {
	return (
		<section className=''>
			<Layout>
				<h2 className={cls.page_title}>НОВОСТИ</h2>
				<div className={cls.news_card_container}>
					{newsData.map((news) => (
						<NewsCard {...news} />
					))}
				</div>
			</Layout>
		</section>
	);
};

export default NewsView;
