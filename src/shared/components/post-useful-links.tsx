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
						className="group flex items-center py-3"
					>
						<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-12 group-hover:bg-teal-300 group-focus-visible:w-12 group-focus-visible:bg-teal-300 motion-reduce:transition-none" />
						<span className="nav-text text-xs font-bold tracking-widest text-slate-500 uppercase group-hover:text-teal-300 group-focus-visible:text-teal-300">
							{link.label}
						</span>
					</a>
				</li>
			))}
		</ul>
	</section>
);
