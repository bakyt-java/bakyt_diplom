import classNames from "classnames";

import cls from "./NotFoundVIew.module.scss";

interface NotFoundViewProps {
	className?: string;
}

const NotFoundView = ({ className }: NotFoundViewProps) => {
	return (
		<div className={classNames(cls.notFoundView, className)}>
			Страница не найдена
		</div>
	);
};

export default NotFoundView;
