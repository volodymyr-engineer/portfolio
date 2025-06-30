import { useTranslations } from 'next-intl';

export const PostShare = () => {
	const translation = useTranslations('Blog-Page.posts.components.share');

	return (
		<button
			type="button"
			className="flex max-h-max cursor-pointer items-center gap-2 rounded-full bg-transparent px-6 py-2.5 text-center font-semibold text-teal-300 shadow-xs transition-all duration-500"
		>
			{translation('label')}
			<svg className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" aria-hidden="true">
				<use href="/assets/sprite.svg#icon-share" />
			</svg>
		</button>
	);
};
