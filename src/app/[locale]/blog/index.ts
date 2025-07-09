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
	const postInternetBasicUnderstanding = useTranslations('Post:internet-basic-understanding');

	return {
		'internet-basic-understanding': {
			link: {
				url: routesConfig.app.frontend.public.blog.posts.internetBasicUnderstanding,
				label: postInternetBasicUnderstanding('prev-mode.link.label'),
				ariaLabel: postInternetBasicUnderstanding('prev-mode.link.aria-label')
			},
			publicationDate: postInternetBasicUnderstanding('publication-date'),
			tags: ['Internet', 'Network', 'Protocols']
		}
	};
};
