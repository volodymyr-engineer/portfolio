type Props = {
	anchorId: Readonly<string>;
	title: Readonly<string>;
	links: ReadonlyArray<{
		href: Readonly<string>;
		label: Readonly<string>;
		ariaLabel: Readonly<string>;
	}>;
};

export const PostUsefulLinks = (props: Props) => (
	<section id={props.anchorId} className="pb-30">
		<h4 className="mt-12 text-2xl font-bold tracking-tight text-slate-200">{props.title}</h4>
		<ul className="mt-3 ml-3">
			{props.links.map((link, index) => (
				<li key={index} className="w-fit">
					<a
						href={link.href}
						target="_blank"
						rel="noreferrer noopener"
						aria-label={link.ariaLabel}
						className="group/link mt-3 mr-8 inline-flex items-baseline text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
					>
						{link.label}
						<svg
							className="ml-1 inline-block h-3 w-3 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
							aria-hidden="true"
						>
							<use href="/assets/sprite.svg#icon-arrow-right" />
						</svg>
					</a>
				</li>
			))}
		</ul>
	</section>
);
