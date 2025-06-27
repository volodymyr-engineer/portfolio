import { useTranslations } from 'next-intl';

export const HtmlModern = () => {
	const translation = useTranslations('Posts.html-modern');

	return <h1>{translation('link.label')}</h1>;
};
