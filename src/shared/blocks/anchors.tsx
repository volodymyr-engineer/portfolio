import { useTranslations } from 'next-intl';
import { Link } from 'src/i18n/navigation';
import { routesConfig } from 'src/routes.config';

export const Anchors = () => {
	const translation = useTranslations('Header');

	return (
		<nav className="nav hidden lg:block" aria-label={translation('navigation-anchors.label')}>
			<ul className="mt-16 w-max">
				<li>
					<Link
						href={`#${routesConfig.app.frontend.public.home.anchors.about}`}
						role="navigation"
						aria-label={translation('navigation-anchors.about.description')}
						className="group flex items-center py-3"
					>
						<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
						<span className="nav-text text-xs font-bold tracking-widest text-slate-500 uppercase group-hover:text-slate-200 group-focus-visible:text-slate-200">
							{translation('navigation-anchors.about.label')}
						</span>
					</Link>
				</li>
				<li>
					<Link
						href={`#${routesConfig.app.frontend.public.home.anchors.experience}`}
						role="navigation"
						aria-label={translation('navigation-anchors.experience.description')}
						className="group flex items-center py-3"
					>
						<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
						<span className="nav-text text-xs font-bold tracking-widest text-slate-500 uppercase group-hover:text-slate-200 group-focus-visible:text-slate-200">
							{translation('navigation-anchors.experience.label')}
						</span>
					</Link>
				</li>
				<li>
					<Link
						href={`#${routesConfig.app.frontend.public.home.anchors.blog}`}
						role="navigation"
						aria-label={translation('navigation-anchors.blog.description')}
						className="group flex items-center py-3"
					>
						<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
						<span className="nav-text text-xs font-bold tracking-widest text-slate-500 uppercase group-hover:text-slate-200 group-focus-visible:text-slate-200">
							{translation('navigation-anchors.blog.label')}
						</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
