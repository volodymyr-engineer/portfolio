import { useTranslations } from 'next-intl';

export const CssPosition = () => {
	const translation = useTranslations('Posts.css-position');

	return <h1>{translation('link.label')}</h1>;
};
