import Link from 'next/link';
import { routesConfig } from 'src/routes.config';

export const HeaderBlock = () => {
	return (
		<>
			<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
				<Link href={routesConfig.app.frontend.public.home.root} role="link" locale="en">
					Volodymyr Shylo
				</Link>
			</h1>
			<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">JavaScript Engineer</h2>
			<p className="mt-4 max-w-xs leading-normal">I build accessible, pixel-perfect digital experiences for the web.</p>
		</>
	);
};
