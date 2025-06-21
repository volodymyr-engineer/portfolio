import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ''
		},
		sitemap: `${process.env.NEXT_PUBLIC_HTTP_PROTOCOL}://${process.env.NEXT_PUBLIC_HTTP_DOMAIN}/sitemap.xml`,
		host: process.env.NEXT_PUBLIC_HTTP_DOMAIN
	};
}
