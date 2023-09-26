import main_photo from "@/shared/images/main_photo.png";

import cls from "./MainView.module.scss";
import { Layout, MatchPano, TableV1 } from "@/shared/ui";
import { mathPanoData } from "../constants";
import { CPLCarousel, Footer, MainTableSection } from "@/widgets";

const MainView = () => {
	return (
		<section className={cls.main_page}>
			<div className={cls.main_photo}>
				<img
					src={main_photo}
					alt='main_photo'
				/>
			</div>
			<Layout>
				<section className={cls.match_pano}>
					<MatchPano
						matchPanoData={mathPanoData}
						title='Предстоящие матчи 10 тура'
					/>
				</section>
				<section className={cls.table_section}>
					<MainTableSection />
				</section>
				<section className={cls.match_pano}>
					<MatchPano
						matchPanoData={mathPanoData}
						title='Завершенные матчи 9 тура'
					/>
				</section>
				<section
					className={cls.carusel}
					id='club'
				>
					<CPLCarousel />
				</section>
			</Layout>
		</section>
	);
};

export default MainView;
