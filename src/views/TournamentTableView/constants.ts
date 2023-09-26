import table_1 from "@/shared/images/table_1.png";
import table_2 from "@/shared/images/table_2.png";
import table_3 from "@/shared/images/table_3.png";
import table_4 from "@/shared/images/table_4.png";
import table_5 from "@/shared/images/table_5.png";
import table_6 from "@/shared/images/table_6.png";
import table_7 from "@/shared/images/table_7.png";
import table_8 from "@/shared/images/table_8.png";
import table_9 from "@/shared/images/table_9.png";
import table_10 from "@/shared/images/table_10.png";

import true_icon from "@/shared/images/true.png";
import false_icon from "@/shared/images/false.png";
import null_icon from "@/shared/images/null.png";

export interface TournamentTableData {
	id: number;
	club: string;
	image_club?: string;
	game: number;
	win: number;
	draw: number;
	lose: number;
	goal_scored: number;
	missed_ball: number;
	rm: number;
	o: number;
	last_five: string[];
}

export const tournamentTableData: TournamentTableData[] = [
	{
		id: 1,
		club: "Дордой",
		image_club: table_1,
		game: 10,
		win: 5,
		draw: 5,
		lose: 3,
		goal_scored: 12,
		missed_ball: 8,
		rm: 4,
		o: 15,
		last_five: [true_icon, true_icon, false_icon, null_icon, null_icon],
	},
	{
		id: 2,
		club: "Алга",
		image_club: table_2,
		game: 10,
		win: 5,
		draw: 5,
		lose: 3,
		goal_scored: 12,
		missed_ball: 8,
		rm: 4,
		o: 15,
		last_five: [true_icon, true_icon, false_icon, null_icon, null_icon],
	},
	{
		id: 3,
		club: "Абдыш-Ата",
		image_club: table_3,
		game: 10,
		win: 5,
		draw: 5,
		lose: 3,
		goal_scored: 12,
		missed_ball: 8,
		rm: 4,
		o: 15,
		last_five: [true_icon, true_icon, false_icon, null_icon, null_icon],
	},
	{
		id: 4,
		club: "Алай",
		image_club: table_4,
		game: 10,
		win: 5,
		draw: 5,
		lose: 3,
		goal_scored: 12,
		missed_ball: 8,
		rm: 4,
		o: 15,
		last_five: [true_icon, true_icon, false_icon, null_icon, null_icon],
	},
	{
		id: 5,
		club: "Нефтчи",
		image_club: table_5,
		game: 10,
		win: 5,
		draw: 5,
		lose: 3,
		goal_scored: 12,
		missed_ball: 8,
		rm: 4,
		o: 15,
		last_five: [true_icon, true_icon, false_icon, null_icon, null_icon],
	},

	{
		id: 6,
		club: "Талант",
		image_club: table_6,
		game: 10,
		win: 5,
		draw: 5,
		lose: 3,
		goal_scored: 12,
		missed_ball: 8,
		rm: 4,
		o: 15,
		last_five: [true_icon, true_icon, false_icon, null_icon, null_icon],
	},
	{
		id: 7,
		club: "ОшТУ",
		image_club: table_7,
		game: 10,
		win: 5,
		draw: 5,
		lose: 3,
		goal_scored: 12,
		missed_ball: 8,
		rm: 4,
		o: 15,
		last_five: [true_icon, true_icon, false_icon, null_icon, null_icon],
	},
	{
		id: 8,
		club: "Мурас Юнайтед",
		image_club: table_8,
		game: 10,
		win: 5,
		draw: 5,
		lose: 3,
		goal_scored: 12,
		missed_ball: 8,
		rm: 4,
		o: 15,
		last_five: [true_icon, true_icon, false_icon, null_icon, null_icon],
	},
	{
		id: 9,
		club: "Кара-Балта",
		image_club: table_9,
		game: 10,
		win: 5,
		draw: 5,
		lose: 3,
		goal_scored: 12,
		missed_ball: 8,
		rm: 4,
		o: 15,
		last_five: [true_icon, true_icon, false_icon, null_icon, null_icon],
	},
	{
		id: 10,
		club: "Илбирс",
		image_club: table_10,
		game: 10,
		win: 5,
		draw: 5,
		lose: 3,
		goal_scored: 12,
		missed_ball: 8,
		rm: 4,
		o: 15,
		last_five: [true_icon, true_icon, false_icon, null_icon, null_icon],
	},
];
