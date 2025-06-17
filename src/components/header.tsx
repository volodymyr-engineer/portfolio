import { useLocale, useTranslations } from 'next-intl';
import { Link } from 'src/i18n/navigation';
import { routesConfig } from 'src/routes.config';

export const HeaderBlock = () => {
	const translation = useTranslations('Header');
	const locale = useLocale();

	return (
		<>
			<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
				<Link
					locale={locale}
					role="link"
					href={routesConfig.app.frontend.public.home.root}
					aria-label={translation('navigation-anchors.about.description')}
					className="inline-flex"
				>
					<span>{translation('title')}</span>
					<svg className="ml-2 h-5 w-5 rounded-[6px]" aria-hidden="true">
						<use href="/sprite.svg#flag-ukraine" />
					</svg>
				</Link>
			</h1>
			<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{translation('subtitle')}</h2>
			<p className="mt-4 max-w-xs leading-normal">{translation('description')}</p>
		</>
	);
};
