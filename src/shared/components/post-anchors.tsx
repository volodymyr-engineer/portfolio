import { Link } from 'src/i18n/navigation';

type Props = {
	title: Readonly<string>;
	anchors: ReadonlyArray<{
		href: Readonly<string>;
		label: Readonly<string>;
		ariaLabel: Readonly<string>;
	}>;
};

export const PostAnchors = (props: Props) => (
	<>
		<h2 className="mt-10 ml-6 text-lg font-bold text-slate-400 uppercase">{props.title}</h2>
		<ul className="mt-2 ml-6">
			{props.anchors.map((anchor, index) => (
				<li key={index} className="w-fit">
					<Link href={`#${anchor.href}`} role="navigation" aria-label={anchor.ariaLabel} className="group flex items-center py-3">
						<span className="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:text-slate-200 motion-reduce:transition-none" />
						<span className="nav-text text-xs font-bold tracking-widest text-slate-400 uppercase group-hover:text-slate-200 group-focus-visible:text-slate-200">
							{anchor.label}
						</span>
					</Link>
				</li>
			))}
		</ul>
	</>
);
