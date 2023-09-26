import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

import { routeConfigPublic } from "@/app/providers/Router/routerConfig";

const StyledWrapper = styled("div")`
	width: 100%;
	height: 100%;
`;

export const AppRouter = () => {
	const routes = routeConfigPublic;

	return (
		<Routes>
			{Object.values(routes).map(({ element, path }, index) => (
				<Route
					key={index}
					path={path}
					element={
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								minHeight: "41.6vh",
							}}
						>
							<Suspense fallback={<CircularProgress color='primary' />}>
								<StyledWrapper className='page-wrapper'>
									{element}
								</StyledWrapper>
							</Suspense>
						</div>
					}
				/>
			))}
		</Routes>
	);
};
