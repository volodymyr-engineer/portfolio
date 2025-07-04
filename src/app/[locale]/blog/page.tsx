import { useTranslations, useLocale } from 'next-intl';
import type { NextPage } from 'next';
import { routesConfig } from 'src/routes.config';
import { Link } from 'src/i18n/navigation';
import { usePosts } from './posts';

export const dynamic = 'force-static';

const BlogPage: NextPage = () => {
	const translation = useTranslations('Blog-Page.core');
	const locale = useLocale();
	const posts = usePosts();
	const allPosts = Object.values(posts);

	return (
		<div className="mx-auto min-h-screen max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
			<header className="lg:py-24">
				<Link
					locale={locale}
					role="link"
					href={routesConfig.app.frontend.public.home.root}
					aria-label={translation('links.back-to-home.aria-label')}
					className="group mb-2 inline-flex items-center leading-tight font-semibold text-teal-300"
				>
					<svg className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
						<use href="/assets/sprite.svg#icon-arrow-right-standard" />
					</svg>
					{translation('links.back-to-home.label')}
				</Link>
			</header>
			<main>
				<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{translation('title')}</h1>
				<table className="mt-12 w-full border-collapse text-left">
					<thead className="sticky top-0 z-10 border-b border-slate-300/10 px-6 py-5 backdrop-blur">
						<tr>
							<th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 min-[480px]:table-cell">
								{translation('table.columns.date')}
							</th>
							<th className="py-4 pr-8 text-sm font-semibold text-slate-200">{translation('table.columns.link')}</th>
							<th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">{translation('table.columns.tags')}</th>
						</tr>
					</thead>
					<tbody>
						{allPosts.map((post, index) => (
							<tr key={index} className="border-b border-slate-300/10 last:border-none">
								<td className="hidden py-4 pr-4 align-top min-[480px]:table-cell">
									<time>{post.publicationDate}</time>
								</td>
								<td className="py-4 pr-4 align-top leading-snug font-semibold text-slate-200">
									<Link
										locale={locale}
										role="article"
										href={post.link.slug}
										aria-label={post.link.ariaLabel}
										className="text-base leading-tight font-medium hover:text-teal-300 focus-visible:text-teal-300"
									>
										{post.link.label}
									</Link>
								</td>
								<td className="py-4 pr-4 align-top">
									<ul className="flex -translate-y-1.5 flex-wrap">
										{post.tags.map((value, index) => (
											<li key={index} className="my-1 mr-1.5 hidden sm:table-cell">
												<span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
													{value}
												</span>
											</li>
										))}
									</ul>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</div>
	);
};

export default BlogPage;
