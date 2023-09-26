import React, { ReactNode } from "react";

import cls from "./Layout.module.scss";

interface LayoutProps {
	children: ReactNode;
	large?: boolean;
}
export const Layout = ({ children, large = false }: LayoutProps) => {
	const className = large ? cls.large : cls.layout;
	return <section className={className}>{children}</section>;
};
