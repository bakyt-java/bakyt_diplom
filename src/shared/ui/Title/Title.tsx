import React from "react";

import title_logo from "@/shared/images/table_logo.png";

import cls from "./Title.module.scss";

interface TitleProps {
	title: string;
}
export const Title: React.FC<TitleProps> = ({ title }) => {
	return (
		<div className={cls.title_container}>
			<h3 className={cls.title}>{title}</h3>
			<div className={cls.image_container}>
				<img
					className={cls.image}
					src={title_logo}
					alt='title_logo'
				/>
			</div>
		</div>
	);
};
