import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_HTTP_PROTOCOL}://${process.env.NEXT_PUBLIC_HTTP_DOMAIN}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		}
	];
}
