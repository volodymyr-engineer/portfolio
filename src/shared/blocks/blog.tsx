import { useTranslations, useLocale } from 'next-intl';
import { Link } from 'src/i18n/navigation';
import { ArticleCard as Card } from 'src/shared/components/article-card';
import { routesConfig } from 'src/routes.config';

export const Blog = () => {
	const translation = useTranslations('Home-Page.main.blog');
	const posts = useTranslations('Posts');
	const locale = useLocale();

	return (
		<section
			id={routesConfig.app.frontend.public.home.anchors.blog}
			aria-label={translation('aria-label')}
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h3 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">{translation('label')}</h3>
			</div>
			<ol className="group/list">
				<li className="mb-12">
					<Card
						link={{
							local: locale,
							href: routesConfig.app.frontend.public.blog.cssPosition,
							label: posts('css-position.link.label'),
							ariaLabel: posts('css-position.link.aria-label')
						}}
						image={{
							src: '/assets/blog/css-position.webp',
							alt: posts('css-position.image.alt')
						}}
					/>
				</li>
				<li className="mb-12">
					<Card
						link={{
							local: locale,
							href: routesConfig.app.frontend.public.blog.cssUnitsOfMeasurement,
							label: posts('css-units-of-measurement.link.label'),
							ariaLabel: posts('css-units-of-measurement.link.aria-label')
						}}
						image={{
							src: '/assets/blog/css-units-of-measurement.webp',
							alt: posts('css-units-of-measurement.image.alt')
						}}
					/>
				</li>
				<li className="mb-12">
					<Card
						link={{
							local: locale,
							href: routesConfig.app.frontend.public.blog.browserAndInternet,
							label: posts('browser-and-internet.link.label'),
							ariaLabel: posts('browser-and-internet.link.aria-label')
						}}
						image={{
							src: '/assets/blog/browser-and-internet.webp',
							alt: posts('browser-and-internet.image.alt')
						}}
					/>
				</li>
				<li className="mb-12">
					<Card
						link={{
							local: locale,
							href: routesConfig.app.frontend.public.blog.cssModern,
							label: posts('css-modern.link.label'),
							ariaLabel: posts('css-modern.link.aria-label')
						}}
						image={{
							src: '/assets/blog/css-modern.webp',
							alt: posts('css-modern.image.alt')
						}}
					/>
				</li>
				<li className="mb-12">
					<Card
						link={{
							local: locale,
							href: routesConfig.app.frontend.public.blog.htmlModern,
							label: posts('html-modern.link.label'),
							ariaLabel: posts('html-modern.link.aria-label')
						}}
						image={{
							src: '/assets/blog/html-modern.webp',
							alt: posts('html-modern.image.alt')
						}}
					/>
				</li>
			</ol>
			<div className="mt-12">
				<Link
					locale={locale}
					role="link"
					href={routesConfig.app.frontend.public.blog.root}
					aria-label={translation('articles-archive.aria-label')}
					className="group inline-flex items-center leading-tight font-medium text-slate-200"
				>
					<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
						{translation('articles-archive.label')}
					</span>
					<svg
						className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px whitespace-nowrap transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
						aria-hidden="true"
					>
						<use href="/assets/sprite.svg#icon-arrow-right-standard" />
					</svg>
				</Link>
			</div>
		</section>
	);
};
