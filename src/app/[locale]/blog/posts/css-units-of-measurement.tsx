import { useTranslations } from 'next-intl';

export const CssUnitsOfMeasurement = () => {
	const translation = useTranslations('Posts.css-units-of-measurement');

	return <h1>{translation('link.label')}</h1>;
};
