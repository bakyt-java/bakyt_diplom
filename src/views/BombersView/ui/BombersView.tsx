import React from "react";

import { BomberTable, BomberTitle, Layout } from "@/shared/ui";
import { bombersViewData } from "../constants";

import cls from "./BombersView.module.scss";

const BombersView = () => {
	return (
		<Layout>
			<div className={cls.title}>
				<BomberTitle title='Бомбардиры' />
			</div>
			<section className={cls.table}>
				<BomberTable dataSource={bombersViewData} />
			</section>
		</Layout>
	);
};

export default BombersView;
