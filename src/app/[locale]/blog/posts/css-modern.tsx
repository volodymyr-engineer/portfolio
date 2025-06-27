import { useTranslations } from 'next-intl';

export const CssModern = () => {
	const translation = useTranslations('Posts.css-modern');

	return <h1>{translation('link.label')}</h1>;
};
