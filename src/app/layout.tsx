import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import 'src/theme.config.css';

type RootLayoutProps = {
	children: Readonly<ReactNode>;
};

export const metadata: Metadata = {
	title: 'Volodymyr Shylo - JavaScript Engineer',
	description: ''
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
