import ilbirsFC from "@/shared/images/IlbirsFC.png";
import dordoiFC from "@/shared/images/dordoiFC.png";

import algaFC from "@/shared/images/algaFC.png";
import abdyshAtaFC from "@/shared/images/abdyshAtaFC.png";

import alayFC from "@/shared/images/alayFC.png";
import neftchiFC from "@/shared/images/neftchiFC.png";

export interface MatchPanoDataType {
	command: string;
	oponent: string;
	fcImage: string;
	fcImage2: string;
	id: number;
	day: string;
	time: string;
}
export const mathPanoData: MatchPanoDataType[] = [
	{
		id: 1,
		command: "Илбирс",
		fcImage: ilbirsFC,
		oponent: "Дордой",
		fcImage2: dordoiFC,
		day: "26 АПРЕЛЯ",
		time: "19:00",
	},
	{
		id: 2,
		command: "Алга",
		fcImage: algaFC,
		oponent: "Абдыш-Ата",
		fcImage2: abdyshAtaFC,
		day: "27 АПРЕЛЯ",
		time: "19:00",
	},

	{
		id: 3,
		command: "Алай",
		fcImage: alayFC,
		oponent: "Нефтчи",
		fcImage2: neftchiFC,
		day: "28 АПРЕЛЯ",
		time: "19:00",
	},
];
