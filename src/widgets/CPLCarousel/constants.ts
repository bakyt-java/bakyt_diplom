import ilbirsFC from "@/shared/images/IlbirsFC.png";
import dordoiFC from "@/shared/images/dordoiFC.png";

import algaFC from "@/shared/images/algaFC.png";
import abdyshAtaFC from "@/shared/images/abdyshAtaFC.png";

import alayFC from "@/shared/images/alayFC.png";
import neftchiFC from "@/shared/images/neftchiFC.png";

interface CPLDataType {
	image: string;
	title: string;
	id: number;
}
export const cplData: CPLDataType[] = [
	{
		id: 1,
		image: dordoiFC,
		title: "Дордой",
	},
	{
		id: 2,
		image: algaFC,
		title: "Алга",
	},

	{
		id: 3,
		image: abdyshAtaFC,
		title: "Абдыш-Ата",
	},
	{
		id: 4,
		image: alayFC,
		title: "Алай",
	},
	{
		id: 5,
		image: ilbirsFC,
		title: "Илбирс",
	},
	{
		id: 6,
		image: neftchiFC,
		title: "Нефтчи",
	},
	{
		id: 7,
		image: alayFC,
		title: "Алай",
	},
	{
		id: 8,
		image: ilbirsFC,
		title: "Илбирс",
	},
	{
		id: 9,
		image: neftchiFC,
		title: "Нефтчи",
	},
];
