import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import cls from "./CPLCarousel.module.scss";
import { cplData } from "../constants";

export const CPLCarousel = () => {
	return (
		<div className={cls.cpl}>
			<div className={cls.title}>Клубы КПЛ 2022/23</div>
			<div className={cls.swiper_container}>
				<Swiper
					slidesPerView={4}
					navigation
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					className={cls.swiper}
					loop
				>
					{cplData.map((item) => (
						<SwiperSlide
							key={item.id}
							className={cls.swiper_slide}
						>
							<div className={cls.slide}>
								<img
									src={item.image}
									alt={item.title}
								/>
								<p>{item.title}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
