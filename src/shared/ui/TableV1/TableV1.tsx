import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.main,
		fontSize: "20px",
		fontWeight: 700,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: "20px",
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
}));

const StyledTitleContainer = styled("div")(({ theme }) => ({
	display: "flex",
	gap: "29px",
	background: theme.palette.primary.main,
	color: theme.palette.common.white,
	height: "72px",
}));
const StyledTitle = styled("p")(() => ({
	fontWeight: 700,
	fontSize: "30px",
	display: "flex",
	alignItems: "center",
}));

const StyledSpan = styled("span")(() => ({
	width: "10px",
	background: "#EA4335",
}));

const StyledButtonContainer = styled("div")(() => ({
	padding: "25px 21px",
}));

const StyledButton = styled("div")(() => ({
	background: "#192355",
	borderRadius: "8px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "white",
	padding: "10px 0 ",
	fontSize: "22px",
	fontWeight: 600,
	cursor: "pointer",
}));

interface RowType {
	club: string;
	В: number;
	П: number;
	Н: number;
	О: number;
}

interface TableV1Props {
	rows: RowType[];
	buttonTitle: string;
	path: string;
	tableTitle: string;
}

export function TableV1({ rows, buttonTitle, path, tableTitle }: TableV1Props) {
	const navigate = useNavigate();
	return (
		<TableContainer component={Paper}>
			<StyledTitleContainer>
				<StyledSpan></StyledSpan>
				<StyledTitle>{tableTitle}</StyledTitle>
			</StyledTitleContainer>
			<Table aria-label='customized table'>
				<TableHead>
					<TableRow>
						<StyledTableCell></StyledTableCell>

						<StyledTableCell>Клуб</StyledTableCell>
						<StyledTableCell>В</StyledTableCell>
						<StyledTableCell>П</StyledTableCell>
						<StyledTableCell>Н</StyledTableCell>
						<StyledTableCell>О</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<StyledTableRow key={row.club}>
							<StyledTableCell>{index + 1}</StyledTableCell>
							<StyledTableCell
								component='th'
								scope='row'
							>
								{row.club}
							</StyledTableCell>
							<StyledTableCell>{row.В}</StyledTableCell>
							<StyledTableCell>{row.П}</StyledTableCell>
							<StyledTableCell>{row.Н}</StyledTableCell>
							<StyledTableCell>{row.О}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
			<StyledButtonContainer>
				<StyledButton onClick={() => navigate(path)}>
					{buttonTitle}
				</StyledButton>
			</StyledButtonContainer>
		</TableContainer>
	);
}
