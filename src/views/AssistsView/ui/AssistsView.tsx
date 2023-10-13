import React from "react";
import { AssistTable, BomberTitle, Layout } from "@/shared/ui";
import { assistsViewData } from "../constants";

import cls from "./AssistsView.module.scss";


const AssistsView = () => {
  	return (
		<Layout>
			<div className={cls.title}>
				<BomberTitle title='Ассисты' />
			</div>
			<section className={cls.table}>
				<AssistTable dataSource={assistsViewData} />
			</section>
		</Layout>
	);
};

export default AssistsView;
