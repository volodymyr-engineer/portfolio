import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { routing } from 'src/i18n/routing';
import { routesConfig } from 'src/routes.config';
import 'src/theme.config.css';

type MetadataProps = {
	params: Promise<{ locale: string }>;
};

type LocaleLayoutProps = {
	children: Readonly<ReactNode>;
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
	const { locale } = await params;
	const translate = await getTranslations({ locale: locale, namespace: 'SEO.metadata' });
	const baseUrl = `${process.env.NEXT_PUBLIC_HTTP_PROTOCOL}://${process.env.NEXT_PUBLIC_HTTP_DOMAIN}`;

	return {
		referrer: 'origin',
		title: translate('title'),
		applicationName: translate('application-name'),
		description: translate('description'),
		keywords: [translate('keywords')],
		category: translate('category'),
		classification: translate('classification'),
		verification: {
			google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE
		},
		openGraph: {
			type: 'website',
			url: baseUrl,
			countryName: translate('open-graph.country-name'),
			locale: 'en_US',
			siteName: process.env.NEXT_PUBLIC_HTTP_DOMAIN,
			title: translate('open-graph.title'),
			description: translate('open-graph.description'),
			images: {
				type: 'image/png',
				url: `${baseUrl}/assets/metadata/open-graph.logo.png`,
				alt: translate('open-graph.image.alt'),
				width: 1200,
				height: 630
			}
		},
		twitter: {
			title: translate('twitter.title'),
			description: translate('twitter.description'),
			site: process.env.NEXT_PUBLIC_HTTP_DOMAIN,
			images: {
				type: 'image/png',
				url: `${baseUrl}/assets/metadata/twitter.logo.png`,
				alt: translate('twitter.image.alt'),
				width: 1500,
				height: 500
			}
		},
		appleWebApp: {
			capable: true,
			title: translate('apple-web-app.title')
		},
		icons: {
			icon: [
				{
					rel: 'icon',
					url: '/assets/metadata/favicon-16x16.png',
					sizes: '16x16',
					type: 'image/png'
				},
				{
					rel: 'icon',
					url: '/assets/metadata/favicon-32x32.png',
					sizes: '32x32',
					type: 'image/png'
				},
				{
					rel: 'apple-touch-icon',
					url: '/assets/metadata/apple-touch-icon.png',
					sizes: '180x180',
					type: 'image/png'
				}
			]
		},
		creator: translate('creator'),
		publisher: translate('publisher'),
		authors: {
			name: translate('authors.name'),
			url: routesConfig.external.socialMedia.linkedin
		}
	};
}

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
