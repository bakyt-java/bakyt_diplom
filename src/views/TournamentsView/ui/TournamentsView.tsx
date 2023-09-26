import cls from "./TournamentsView.module.scss";
import { mainTournamentsData, tournamentsData } from "../constants";
import { Layout, Title } from "@/shared/ui";

const TournamentsView = () => {
	return (
		<section className={cls.tournaments_view}>
			<Layout>
				{mainTournamentsData.map((tour) => (
					<div className={cls.tour_wrapper}>
						<Title title={tour.title} />
						<article className={cls.list_wrapper}>
							{tour.tour.map((item) => (
								<li className={cls.list}>
									<p>{item.day}</p>
									<div className={cls.club_box}>
										<div className={cls.teem}>
											<img
												src={item.fcImage}
												alt=''
											/>
											<span>{item.command}</span>
										</div>
										<p className={cls.vs}>VS</p>
										<div className={cls.teem}>
											<img
												src={item.fcImage2}
												alt=''
											/>
											<span>{item.oponent}</span>
										</div>
									</div>
									<p>{item.time}</p>
								</li>
							))}
						</article>
					</div>
				))}
			</Layout>
		</section>
	);
};

export default TournamentsView;
