import { useTranslations } from 'next-intl';

export const HtmlAccessibility = () => {
	const translation = useTranslations('Posts.html-accessibility');

	return <h1>{translation('link.label')}</h1>;
};
