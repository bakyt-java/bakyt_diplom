import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AssistsViewDataType } from "@/views/AssistsView/constants";

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

interface AssistTableProps {
	dataSource: AssistsViewDataType[];
}

export const AssistTable: React.FC<AssistTableProps> = ({ dataSource }) => {
	return (
		<TableContainer component={Paper}>
			<StyledTitle>
				Сезон <span>2022- 23</span>
			</StyledTitle>
			<Table
				sx={{ minWidth: 700 }}
				aria-label='customized table'
			>
				<TableHead>
					<TableRow>
						<StyledTableCell align='left'>Игрок</StyledTableCell>
						<StyledTableCell align='left'>Клуб</StyledTableCell>
						<StyledTableCell align='left'>Позиция</StyledTableCell>
						<StyledTableCell align='center'>И</StyledTableCell>
						<StyledTableCell align='center'>ГП</StyledTableCell>
						<StyledTableCell align='center'></StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{dataSource.map((row, index) => (
						<StyledTableRow key={row.id}>
							<StyledTableCell
								component='th'
								scope='row'
							>
								<div
									style={{
										display: "flex",
										gap: "8px",
									}}
								>
									<span>{index + 1}</span>
									{row.name}
								</div>
							</StyledTableCell>
							<StyledTableCell align='left'>{row.club}</StyledTableCell>
							<StyledTableCell align='left'>{row.possiton}</StyledTableCell>
							<StyledTableCell align='center'>{row.game}</StyledTableCell>
							<StyledTableCell align='center'>{row.goal_pass}</StyledTableCell>
							<StyledTableCell align='center'>
								<img
									src={row.image}
									alt={row.club}
								/>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
