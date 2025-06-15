import { routesConfig } from 'src/routes.config';

export const SocialMedia = () => {
	return (
		<ul className="mt-8 ml-1 flex items-center" aria-label="Social media links">
			<li className="mr-5 shrink-0 text-xs">
				<a
					className="block hover:text-slate-200"
					href={routesConfig.external.github}
					target="_blank"
					rel="noreferrer noopener"
					aria-label="GitHub (opens in a new tab)"
					title="GitHub"
				>
					<span className="sr-only">GitHub</span>
					<svg className="stroke-info-content w-50 fill-current" aria-hidden="true">
						<use href="/sprite.svg#icon-github" />
					</svg>
				</a>
			</li>
		</ul>
	);
};
