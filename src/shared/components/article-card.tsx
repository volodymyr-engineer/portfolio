import Image from 'next/image';
import { Link } from 'src/i18n/navigation';

type Props = {
	link: {
		local: Readonly<string>;
		href: Readonly<string>;
		label: Readonly<string>;
		ariaLabel: Readonly<string>;
	};
	image: {
		src: Readonly<string>;
		alt: Readonly<string>;
	};
};

export const ArticleCard = (props: Props) => (
	<div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
		<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
		<Image
			src={props.image.src}
			alt={props.image.alt}
			decoding="async"
			loading="lazy"
			width="200"
			height="48"
			data-nimg="1"
			className="z-10 col-span-2 aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:col-span-2"
		/>
		<div className="z-10 col-span-6 my-auto">
			<h5 className="-mt-1">
				<Link
					locale={props.link.local}
					role="link"
					href={props.link.href}
					aria-label={props.link.ariaLabel}
					className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
				>
					<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
					<span>
						{props.link.label}
						<span className="inline-block">
							<svg
								className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px whitespace-nowrap transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
								aria-hidden="true"
							>
								<use href="/assets/sprite.svg#icon-arrow-right-standard" />
							</svg>
						</span>
					</span>
				</Link>
			</h5>
		</div>
	</div>
);
