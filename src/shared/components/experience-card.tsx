type Props = {
	workPeriod: {
		label: Readonly<string>;
		ariaLabel: Readonly<string>;
	};
	link: {
		href: Readonly<string>;
		label: Readonly<string>;
		ariaLabel: Readonly<string>;
	};
	description: Readonly<string>;
	technologies: {
		ariaLabel: Readonly<string>;
		tags: Readonly<string[]>;
	};
};

export const ExperienceCard = (props: Props) => (
	<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
		<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
		<time
			className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
			aria-label={props.workPeriod.ariaLabel}
		>
			{props.workPeriod.label}
		</time>
		<div className="z-10 sm:col-span-6">
			<h4 className="leading-snug font-medium text-slate-200">
				<div>
					<a
						href={props.link.href}
						target="_blank"
						rel="noreferrer noopener"
						aria-label={props.link.ariaLabel}
						className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
					>
						<span>{props.link.label}</span>
						<svg
							className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
							aria-hidden="true"
						>
							<use href="/sprite.svg#icon-arrow-right" />
						</svg>
					</a>
				</div>
			</h4>
			<p className="mt-2 text-sm leading-normal">{props.description}</p>
			<ul className="mt-2 flex flex-wrap" aria-label={props.technologies.ariaLabel}>
				{props.technologies.tags.map((tag, index) => (
					<li key={index} className="mt-2 mr-1.5">
						<span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
							{tag}
						</span>
					</li>
				))}
			</ul>
		</div>
	</div>
);
