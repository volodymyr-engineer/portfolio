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
			<body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
				{children}
			</body>
		</html>
	);
}
