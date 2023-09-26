import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material";

import { TournamentTableData } from "@/views/TournamentTableView/constants";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.white,
		color: "#7C7C7C",
		fontSize: "20px",
		fontWeight: 400,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: "20px",
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const StyledTitle = styled("div")(() => ({
	display: "flex",
	height: "53px",
	background: "#F8F8F8",
	alignItems: "center",
	padding: "12px 14px",
	color: "black",
	fontSize: "26px",
	fontWeight: "600",
	gap: "26px",
	span: {
		fontSize: "22px",
		color: "#0921F9",
	},
}));

interface TournamentTableSectionProps {
	dataSource: TournamentTableData[];
}

export const TournamentTableSection: React.FC<TournamentTableSectionProps> = ({
	dataSource,
}) => {
	return (
		<TableContainer component={Paper}>
			<StyledTitle>
				Сезон <span>2022- 23</span>
			</StyledTitle>
			<Table
				sx={{ minWidth: 650 }}
				aria-label='simple table'
			>
				<TableHead>
					<StyledTableRow>
						<StyledTableCell align='left'>Клуб</StyledTableCell>
						<StyledTableCell align='center'>И</StyledTableCell>
						<StyledTableCell align='center'>В</StyledTableCell>
						<StyledTableCell align='center'>Н</StyledTableCell>
						<StyledTableCell align='center'>П</StyledTableCell>
						<StyledTableCell align='center'>ЗМ </StyledTableCell>
						<StyledTableCell align='center'>ПМ</StyledTableCell>
						<StyledTableCell align='center'>РМ</StyledTableCell>
						<StyledTableCell align='center'>О</StyledTableCell>
						<StyledTableCell align='center'>Последние 5</StyledTableCell>
					</StyledTableRow>
				</TableHead>
				<TableBody>
					{dataSource.map((row) => (
						<StyledTableRow
							key={row.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<StyledTableCell
								component='th'
								scope='row'
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								{row.id} <img src={row.image_club} /> {row.club}
							</StyledTableCell>
							<StyledTableCell align='center'>{row.game}</StyledTableCell>
							<StyledTableCell align='center'>{row.win}</StyledTableCell>
							<StyledTableCell align='center'>{row.draw}</StyledTableCell>
							<StyledTableCell align='center'>{row.lose}</StyledTableCell>
							<StyledTableCell align='center'>
								{row.goal_scored}
							</StyledTableCell>
							<StyledTableCell align='center'>
								{row.missed_ball}
							</StyledTableCell>
							<StyledTableCell align='center'>{row.rm}</StyledTableCell>
							<StyledTableCell align='center'>{row.o}</StyledTableCell>
							<StyledTableCell align='center'>
								<div
									style={{
										height: "100%",
										display: "flex",
										gap: "12px",
										justifyContent: "center",
									}}
								>
									{row.last_five.map((item, index) => (
										<img
											src={item}
											alt='item'
											key={index}
										/>
									))}
								</div>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
