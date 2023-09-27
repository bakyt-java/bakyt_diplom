import React from "react";
import { NavLink } from "react-router-dom";

import table_logo from "@/shared/images/table_logo.png";

import cls from "./BomberTitle.module.scss";

interface BomberTitleProps {
	title: string;
}

export const BomberTitle: React.FC<BomberTitleProps> = ({ title }) => {
	return (
		<article className={cls.main_title}>
			<h3 className={cls.title}>{title}</h3>
			<div className={cls.nav_container}>
				<div className={cls.nav}>
					<NavLink
						to='/bombers'
						className={({ isActive }) =>
							isActive ? cls.active_link : cls.link
						}
					>
						Бомбардиры
					</NavLink>
					<NavLink
						to='/assists'
						className={({ isActive }) =>
							isActive ? cls.active_link : cls.link
						}
					>
						Ассисты
					</NavLink>
				</div>
				<div className={cls.logo_wrapper}>
					<img
						src={table_logo}
						alt=''
					/>
				</div>
			</div>
		</article>
	);
};
