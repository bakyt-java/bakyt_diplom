import React from "react";

import cls from "./MatchPano.module.scss";
import { MatchPanoDataType } from "@/views/MainView/constants";

interface MatchPanoProps {
	matchPanoData: MatchPanoDataType[];
	title: string;
}
export const MatchPano = ({ matchPanoData, title }: MatchPanoProps) => {
	return (
		<article className={cls.match_pano}>
			<h3 className={cls.match_pano_title}>{title}</h3>
			<div className={cls.card_container}>
				{matchPanoData.map((pano) => (
					<div
						className={cls.card}
						key={pano.id}
					>
						<p className={cls.card_time_title}>
							<span>{pano.day}</span>
							<span>{pano.time}</span>
						</p>
						<div className={cls.card_teem}>
							<div className={cls.image_container}>
								<img
									src={pano.fcImage}
									alt={pano.command}
								/>
								<span>{pano.command}</span>
							</div>

							<p>VS</p>
							<div className={cls.image_container}>
								<img
									src={pano.fcImage2}
									alt={pano.oponent}
								/>
								<span>{pano.oponent}</span>
							</div>
						</div>
						<p className={cls.card_title}>Стадион Долона Омурзакова</p>
					</div>
				))}
			</div>
		</article>
	);
};
