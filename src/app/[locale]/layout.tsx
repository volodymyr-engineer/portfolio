import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { routing } from 'src/i18n/routing';
import 'src/theme.config.css';

type LocaleLayoutProps = {
	children: Readonly<ReactNode>;
	params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
	title: 'Volodymyr Shylo - JavaScript Engineer',
	description: ''
};

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	style: 'normal',
	preload: true
});

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html lang={locale} className="scroll-smooth">
			<NextIntlClientProvider timeZone="Europe/Kyiv" messages={messages}>
				<body
					className={`${inter.className} relative bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
				>
					{children}
				</body>
			</NextIntlClientProvider>
		</html>
	);
};

export default LocaleLayout;
