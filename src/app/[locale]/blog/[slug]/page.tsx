import { useLocale, useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { PostShare } from 'src/shared/components/post-share';
import { Link } from 'src/i18n/navigation';
import { routesConfig } from 'src/routes.config';
import { usePosts } from '../posts';

type Props = {
	params: { slug: string };
};

type PostKey = keyof ReturnType<typeof usePosts>;

const articles = [routesConfig.app.frontend.public.blog.posts.internetBasicUnderstanding];

export const generateStaticParams = () => {
	return articles.map((slug) => ({ slug }));
};

const Post = ({ params }: Props) => {
	const translation = useTranslations('Blog-Page.core');
	const locale = useLocale();
	const slug = params.slug as PostKey;
	const posts = usePosts();
	const post = posts[slug];

	if (!post) return notFound();

	const Post = post.component;

	return (
		<div className="mx-auto min-h-screen max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
			<header className="flex justify-between lg:py-24">
				<Link
					locale={locale}
					role="link"
					href={routesConfig.app.frontend.public.blog.root}
					aria-label={translation('links.back-to-home.aria-label')}
					className="group mb-2 inline-flex items-center leading-tight font-semibold text-teal-300"
				>
					<svg className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
						<use href="/assets/sprite.svg#icon-arrow-right-standard" />
					</svg>
					{translation('links.back-to-home.label')}
				</Link>
				<PostShare />
			</header>
			<main>
				<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{post.link.label}</h1>
				<span className="mt-10 block">{post.publicationDate}</span>
				<Post />
			</main>
		</div>
	);
};

export default Post;
