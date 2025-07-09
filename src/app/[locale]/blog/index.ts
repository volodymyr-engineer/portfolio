import { useTranslations } from 'next-intl';
import { routesConfig } from 'src/routes.config';

type Types = {
	[kay: string]: {
		link: {
			url: Readonly<string>;
			label: Readonly<string>;
			ariaLabel: Readonly<string>;
		};
		publicationDate: Readonly<string>;
		tags: Readonly<string[]>;
	};
};

export const usePosts = (): Types => {
	const translation = useTranslations('Blog-Page.posts');

	return {
		'internet-basic-understanding': {
			link: {
				url: routesConfig.app.frontend.public.blog.posts.internetBasicUnderstanding,
				label: translation('internet-basic-understanding.link.label'),
				ariaLabel: translation('internet-basic-understanding.link.aria-label')
			},
			publicationDate: translation('internet-basic-understanding.publication-date'),
			tags: ['Internet', 'Network', 'Protocols']
		}
	};
};
