import { useTranslations } from 'next-intl';
import { routesConfig } from 'src/routes.config';
import { BrowserAndInternet } from './browser-and-internet';
import { CssModern } from './css-modern';
import { CssPosition } from './css-position';
import { CssUnitsOfMeasurement } from './css-units-of-measurement';
import { HtmlAccessibility } from './html-accessibility';
import { HtmlModern } from './html-modern';

export const usePosts = () => {
	const translation = useTranslations('Posts');

	return {
		'browser-and-internet': {
			slug: routesConfig.app.frontend.public.blog.browserAndInternet,
			title: translation('browser-and-internet.link.label'),
			ariaLabel: translation('browser-and-internet.link.aria-label'),
			tags: ['DNS', 'Browser', 'Internet', 'Network', 'Protocols'],
			publicationYear: '2025',
			component: BrowserAndInternet
		},
		'css-modern': {
			slug: routesConfig.app.frontend.public.blog.cssModern,
			title: translation('css-modern.link.label'),
			ariaLabel: translation('css-modern.link.aria-label'),
			tags: ['CSS 3'],
			publicationYear: '2025',
			component: CssModern
		},
		'css-position': {
			slug: routesConfig.app.frontend.public.blog.cssPosition,
			title: translation('css-position.link.label'),
			ariaLabel: translation('css-position.link.aria-label'),
			tags: ['CSS 3'],
			publicationYear: '2025',
			component: CssPosition
		},
		'css-units-of-measurement': {
			slug: routesConfig.app.frontend.public.blog.cssUnitsOfMeasurement,
			title: translation('css-units-of-measurement.link.label'),
			ariaLabel: translation('css-units-of-measurement.link.aria-label'),
			tags: ['CSS 3'],
			publicationYear: '2025',
			component: CssUnitsOfMeasurement
		},
		'html-accessibility': {
			slug: routesConfig.app.frontend.public.blog.htmlAccessibility,
			title: translation('html-accessibility.link.label'),
			ariaLabel: translation('html-accessibility.link.aria-label'),
			tags: ['HTML 5', 'Accessibility'],
			publicationYear: '2025',
			component: HtmlAccessibility
		},
		'html-modern': {
			slug: routesConfig.app.frontend.public.blog.htmlModern,
			title: translation('html-modern.link.label'),
			ariaLabel: translation('html-modern.link.aria-label'),
			tags: ['HTML 5'],
			publicationYear: '2025',
			component: HtmlModern
		}
	};
};
