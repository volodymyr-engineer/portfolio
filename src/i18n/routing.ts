import { defineRouting } from 'next-intl/routing';

export const localizations = ['en'];

export const routing = defineRouting({
	locales: localizations,
	defaultLocale: localizations[0],
	localePrefix: 'as-needed'
});
