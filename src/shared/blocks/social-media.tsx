import { routesConfig } from 'src/routes.config';
import { useTranslations } from 'next-intl';

export const SocialMedia = () => {
	const translation = useTranslations('Home-Page.header');

	return (
		<ul className="mt-8 ml-1 flex items-center" aria-label={translation('socials-media.label')}>
			<li className="mr-5 shrink-0 text-xs">
				<a
					href={routesConfig.external.socialMedia.github}
					target="_blank"
					rel="noreferrer noopener"
					title={translation('socials-media.github.label')}
					aria-label={translation('socials-media.github.description')}
					className="block hover:text-slate-200"
				>
					<span className="sr-only">{translation('socials-media.github.label')}</span>
					<svg className="stroke-info-content h-6 w-6 fill-current" aria-hidden="true">
						<use href="/assets/sprite.svg#icon-github" />
					</svg>
				</a>
			</li>
			<li className="mr-5 shrink-0 text-xs">
				<a
					href={routesConfig.external.socialMedia.linkedin}
					target="_blank"
					rel="noreferrer noopener"
					title={translation('socials-media.linkedin.label')}
					aria-label={translation('socials-media.linkedin.description')}
					className="block hover:text-slate-200"
				>
					<span className="sr-only">{translation('socials-media.github.label')}</span>
					<svg className="h-6 w-6" aria-hidden="true">
						<use href="/assets/sprite.svg#icon-linkedin" />
					</svg>
				</a>
			</li>
			<li className="mr-5 shrink-0 text-xs">
				<a
					href={routesConfig.external.socialMedia.codepen}
					target="_blank"
					rel="noreferrer noopener"
					title={translation('socials-media.codepen.label')}
					aria-label={translation('socials-media.codepen.description')}
					className="block hover:text-slate-200"
				>
					<span className="sr-only">{translation('socials-media.codepen.label')}</span>
					<svg className="h-6 w-6" aria-hidden="true">
						<use href="/assets/sprite.svg#icon-codepen" />
					</svg>
				</a>
			</li>
		</ul>
	);
};
