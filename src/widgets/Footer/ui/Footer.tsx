import React from "react";

import cls from "./Footer.module.scss";
import { Layout } from "@/shared/ui";

export const Footer = () => {
	return (
		<footer className={cls.footer}>
			<Layout>
				<article className={cls.footer_container}>
					<div
						className={cls.title_container}
						id='contact'
					>
						<p className={cls.title}>Контакты</p>
						<p className={cls.subtitle}>
							Мы профессиональный футбольный клуб в Бишкеке 1990 года. Это давно
							установленный факт.
						</p>
						<div></div>
					</div>
					<div className={cls.title_container}>
						<p className={cls.title}>Ресурсы</p>
						<ul className={cls.nav_container}>
							<li>ТУРНИРЫ</li>
							<li>ФУТБОЛ КЫРГЫЗСТАНЕ</li>
							<li>СБОРНЫЕ</li>
							<li>КОНТАКТЫ</li>
							<li>О НАС </li>
						</ul>
					</div>
					<div className={cls.title_container}>
						<p className={cls.title}>Новостная рассылка</p>
						<p className={cls.subtitle}>
							Мы будем присылать обновления прямо на вашу почту. Давайте
							оставаться на связи!
						</p>

						<form className={cls.form}>
							<input
								type='text'
								placeholder='Enter Email'
							/>
							<button>asd</button>
						</form>
					</div>
				</article>
			</Layout>
		</footer>
	);
};
