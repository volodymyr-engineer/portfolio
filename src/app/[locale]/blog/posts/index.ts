import { useTranslations } from 'next-intl';
import { routesConfig } from 'src/routes.config';
import { InternetBasicUnderstanding } from './internet-basic-understanding';

export const usePosts = () => {
	const translation = useTranslations('Blog-Page.posts');

	return {
		'internet-basic-understanding': {
			link: {
				slug: routesConfig.app.frontend.public.blog.posts.internetBasicUnderstanding,
				label: translation('internet-basic-understanding.link.label'),
				ariaLabel: translation('internet-basic-understanding.link.aria-label')
			},
			publicationDate: translation('internet-basic-understanding.publication-date'),
			tags: ['Internet', 'Network', 'Protocols'],
			component: InternetBasicUnderstanding
		}
	};
};
