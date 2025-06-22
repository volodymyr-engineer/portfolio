import { getTranslations } from 'next-intl/server';
import type { MetadataRoute } from 'next';
import { localizations } from 'src/i18n/routing';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
	const locale = localizations[0];
	const translate = await getTranslations({ locale: locale, namespace: 'Metadata.web-manifest' });

	return {
		id: `${process.env.NEXT_PUBLIC_HTTP_PROTOCOL}://${process.env.NEXT_PUBLIC_HTTP_DOMAIN}`,
		start_url: '/',
		name: translate('name'),
		short_name: translate('short-name'),
		description: translate('description'),
		categories: [translate('categories')],
		display: 'standalone',
		orientation: 'natural',
		scope: '/app/',
		lang: locale,
		dir: 'ltr',
		icons: [
			{
				src: '/assets/web-manifest/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/assets/web-manifest/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		],
		theme_color: 'oklch(20.8% 0.042 265.755)',
		background_color: 'oklch(20.8% 0.042 265.755)'
	};
}
