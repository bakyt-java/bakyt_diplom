import table_1 from "@/shared/images/table_1.png";
import table_5 from "@/shared/images/table_5.png";
import table_2 from "@/shared/images/table_2.png";
import table_4 from "@/shared/images/table_4.png";
import table_3 from "@/shared/images/table_3.png";

export interface AssistsViewDataType {
	name: string;
	club: string;
	possiton: string;
	game: number;
	goal_pass: number;
	image: string;
	id: number;
}
export const assistsViewData: AssistsViewDataType[] = [
	{
		name: "Данин Талович",
		club: "Дордой",
		possiton: "Нападающий",
		game: 10,
		goal_pass: 15,
		image: table_1,
		id: 1,
	},
	{
		name: "Дастанбек Токтосунов",
		club: "Нефтчи",
		possiton: "Полузащитник",
		game: 10,
		goal_pass: 13,
		image: table_5,
		id: 2,
	},
	{
		name: "Максат Алыгулов",
		club: "Алга",
		possiton: "Полузащитник",
		game: 10,
		goal_pass: 12,
		image: table_2,
		id: 3,
	},
	{
		name: "Нурлан Сарыкбаев",
		club: "Алай",
		possiton: "Полузащитник",
		game: 10,
		goal_pass: 10,
		image: table_4,
		id: 4,
	},
	{
		name: "Илья Кожухарь",
		club: "Абдыш-Ата",
		possiton: "Полузащитник",
		game: 10,
		goal_pass: 10,
		image: table_3,
		id: 5,
	},
	{
		name: "Айзар Акматов",
		club: "Абдыш-Ата",
		possiton: "Защитник",
		game: 10,
		goal_pass: 10,
		image: table_3,
		id: 6,
	},
	{
		name: "Турсунали Рустамов",
		club: "Дордой",
		possiton: "Нападающий",
		game: 10,
		goal_pass: 9,
		image: table_1,
		id: 7,
	},
	{
		name: "Эльдар Молдожунусов",
		club: "Нефтчи",
		possiton: "Защитник",
		game: 10,
		goal_pass: 9,
		image: table_5,
		id: 8,
	},
	{
		name: "Арлен Шаршенбеков",
		club: "Абдыш-Ата",
		possiton: "Защитник",
		game: 10,
		goal_pass: 8,
		image: table_3,
		id: 9,
	},
	{
		name: "Акрам Умаров",
		club: "Нефтчи",
		possiton: "Полузащитник",
		game: 10,
		goal_pass: 7,
		image: table_5,
		id: 10,
	},
];
