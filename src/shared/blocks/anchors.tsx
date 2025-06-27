'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from 'src/i18n/navigation';
import { routesConfig } from 'src/routes.config';

type Table = {
	[key: string]: HTMLAnchorElement;
};

const options: IntersectionObserverInit = {
	root: null,
	rootMargin: '-50% 0px',
	threshold: 0
};

const dynamicUpdatingAnchorsLinkStyles = (table: Table, old: string, current: string) => {
	table[old].children[0].classList.remove('w-16');
	table[old].children[0].classList.remove('bg-slate-200');
	table[old].children[0].classList.add('bg-slate-600');
	table[old].children[1].classList.remove('text-slate-200');
	table[old].children[1].classList.add('text-slate-500');
	table[current].children[0].classList.add('w-16');
	table[current].children[0].classList.remove('bg-slate-600');
	table[current].children[0].classList.add('bg-slate-200');
	table[current].children[1].classList.remove('text-slate-500');
	table[current].children[1].classList.add('text-slate-200');
};

export const Anchors = () => {
	const translation = useTranslations('Home-Page.header');
	const linkRefs = useRef<HTMLAnchorElement[]>([]);
	const sectionRefs = useRef<HTMLElement[]>([]);
	const selectedIdRef = useRef<string>('');

	useEffect(() => {
		if (window.innerWidth < 1024) return;

		const aboutRef = document.getElementById(routesConfig.app.frontend.public.home.anchors.about);
		const experienceRef = document.getElementById(routesConfig.app.frontend.public.home.anchors.experience);
		const blogRef = document.getElementById(routesConfig.app.frontend.public.home.anchors.blog);

		if (!aboutRef || !experienceRef || !blogRef) return;

		sectionRefs.current.push(aboutRef, experienceRef, blogRef);

		const mappingTable = sectionRefs.current.reduce((list, section, i) => {
			list[section.id] = linkRefs.current[i];
			return list;
		}, {} as Table);

		const onObserve: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const { id } = entry.target as HTMLElement;
					dynamicUpdatingAnchorsLinkStyles(mappingTable, selectedIdRef.current, id);
					selectedIdRef.current = id;
				}
			});
		};

		const observer = new IntersectionObserver(onObserve, options);
		sectionRefs.current.forEach((section) => observer.observe(section));
		selectedIdRef.current = sectionRefs.current[0].id;

		return () => observer.disconnect();
	}, []);

	return (
		<nav className="nav hidden lg:block" aria-label={translation('navigation-anchors.label')}>
			<ul className="mt-16 w-max">
				<li>
					<Link
						ref={(element) => {
							if (element) linkRefs.current.push(element);
						}}
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
						ref={(element) => {
							if (element) linkRefs.current.push(element);
						}}
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
						ref={(element) => {
							if (element) linkRefs.current.push(element);
						}}
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
