import { useTranslations } from 'next-intl';

export const BrowserAndInternet = () => {
	const translation = useTranslations('Posts.browser-and-internet');

	return <h1>{translation('link.label')}</h1>;
};
