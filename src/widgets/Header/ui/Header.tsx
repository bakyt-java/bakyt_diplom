import { useNavigate } from "react-router-dom";

import cls from "./Header.module.scss";
import { navigation } from "../constants";
import { Layout } from "@/shared/ui";

import logo from "@/shared/icons/logo.svg";

export const Header = () => {
	const history = useNavigate();

	const navigate = (path: string) => {
		history(path);
	};
	return (
		<header className={cls.header}>
			<Layout>
				<nav className={cls.header_box}>
					<div
						className={cls.logo}
						onClick={() => navigate("/")}
					>
						<img
							src={logo}
							alt='Логотип'
						/>
					</div>
					<ul className={cls.nav_container}>
						{navigation.map((nav, index) => {
							if (index === navigation.length - 1) {
								return <a href='#contact'>{nav.title}</a>;
							}
							if (index === 0) {
								return (
									<li
										key={nav.id}
										onClick={() => navigate(nav.path)}
										className={cls.navigation}
									>
										<a href='#club'>{nav.title}</a>
									</li>
								);
							}

							return (
								<li
									key={nav.id}
									onClick={() => navigate(nav.path)}
									className={cls.navigation}
								>
									{nav.title}
								</li>
							);
						})}
					</ul>
				</nav>
			</Layout>
		</header>
	);
};
