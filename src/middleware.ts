import createMiddleware from 'next-intl/middleware';
import { routing } from 'src/i18n/routing';

type Config = {
	matcher: string;
};

export const config: Config = {
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};

export default createMiddleware(routing);
