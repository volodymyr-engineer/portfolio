import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import type { GetRequestConfigParams } from 'next-intl/server';
import type { Formats } from 'next-intl';
import { routing } from './routing';

export const formats = {} satisfies Formats;

export default getRequestConfig(async ({ requestLocale }: GetRequestConfigParams) => {
	const requested = await requestLocale;

	const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

	return {
		locale: locale,
		messages: (await import(`translations/${locale}.json`)).default
	};
});
