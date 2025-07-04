import { useTranslations } from 'next-intl';
import { routesConfig } from 'src/routes.config';

export const Quote = () => {
	const translation = useTranslations('Home-Page.main.quote');

	return (
		<footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0" aria-label={translation('aria-label')}>
			<p className="">
				{translation('text.normal-1')}
				<span className="font-medium text-slate-400">{translation('text.bold-1')}</span>
				{translation('text.normal-2')}
				<span className="font-medium text-slate-400">{translation('text.bold-2')}</span>
				{translation('text.normal-3')}
				<span className="font-medium text-slate-400">{translation('text.bold-3')}</span>
				{translation('text.normal-4')}
				<span className="font-medium text-slate-400">{translation('text.bold-4')}</span>
				{translation('text.normal-5')}
			</p>
			<a
				href={routesConfig.external.quote.martinFowler}
				target="_blank"
				rel="noreferrer noopener"
				aria-label={translation('author.aria-label')}
				className="group/link mt-3 mr-8 inline-flex items-baseline text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
			>
				{translation('author.label')}
				<svg
					className="ml-1 inline-block h-3 w-3 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
					aria-hidden="true"
				>
					<use href="/assets/sprite.svg#icon-arrow-right" />
				</svg>
			</a>
		</footer>
	);
};
