import type { MetadataRoute } from 'next';
import { routesConfig } from 'src/routes.config';

const homePage = `${process.env.NEXT_PUBLIC_HTTP_PROTOCOL}://${process.env.NEXT_PUBLIC_HTTP_DOMAIN}`;

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: homePage,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1
		},
		{
			url: homePage + routesConfig.app.frontend.public.blog.root,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: homePage + routesConfig.app.frontend.public.blog.posts.internetBasicUnderstanding,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.95
		}
	];
}
