import { TournamentTableSection } from "@/widgets";

import { Layout } from "@/shared/ui";

import table_logo from "@/shared/images/table_logo.png";

import cls from "./TournamentTable.module.scss";
import { tournamentTableData } from "../constants";

const TournamentTable = () => {
	return (
		<section className={cls.tournament_table_view}>
			<Layout>
				<div className={cls.main_title}>
					<h1 className={cls.title}>Турнирная таблица</h1>
					<div>
						<img
							src={table_logo}
							alt='table'
						/>
					</div>
				</div>
				<TournamentTableSection dataSource={tournamentTableData} />
			</Layout>
		</section>
	);
};

export default TournamentTable;
