import { useLocale, useTranslations } from 'next-intl';
import { Link } from 'src/i18n/navigation';
import { routesConfig } from 'src/routes.config';
import Image from 'next/image';

const NotFoundPage = () => {
	const translation = useTranslations('Not-Found-Page');
	const locale = useLocale();

	return (
		<main className="mx-auto flex min-h-screen max-w-screen-lg items-center justify-center px-6 py-12 font-sans md:justify-between md:px-12 md:py-16 lg:py-0">
			<div className="content">
				<h1 className="text-5xl font-bold text-stone-50">{translation('title')}</h1>
				<p className="mt-2 ml-3 text-xl font-semibold">{translation('description')}</p>
				<Link
					locale={locale}
					role="link"
					href={routesConfig.app.frontend.public.home.root}
					aria-label={translation('link.aria-label')}
					className="group mt-13 inline-flex items-center text-xl leading-tight font-bold text-teal-300"
				>
					<svg className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
						<use href="/assets/sprite.svg#icon-arrow-right-standard" />
					</svg>
					{translation('link.label')}
				</Link>
			</div>
			<Image
				src="/assets/not-found/error.png"
				alt={translation('image.alt')}
				decoding="async"
				loading="lazy"
				width="512"
				height="426"
				data-nimg="1"
				className="hidden md:block"
			/>
		</main>
	);
};

export default NotFoundPage;
