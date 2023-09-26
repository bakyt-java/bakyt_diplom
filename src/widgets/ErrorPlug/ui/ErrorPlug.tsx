import { Button } from "@mui/material";
import clsx from "clsx";

import { ErrorPlugProps } from "../types";

import cls from "./ErrorPlug.module.scss";

export const ErrorPlug = ({ className }: ErrorPlugProps) => {
	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={clsx(cls.errorPlug, className)}>
			<p>Произошла непредвиденная ошибка</p>
			<Button onClick={reloadPage}>Обновить страницу</Button>
		</div>
	);
};
