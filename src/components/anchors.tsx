import Link from 'next/link';
import { routesConfig } from 'src/routes.config';

export const AnchorsBlock = () => {
	return (
		<nav className="nav hidden lg:block" aria-label="In-page jump links">
			<ul className="mt-16 w-max">
				<li>
					<Link
						href={routesConfig.app.frontend.public.home.anchors.about}
						className="group flex items-center py-3"
						role="navigation"
						locale="en"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href={routesConfig.app.frontend.public.home.anchors.experience}
						className="group flex items-center py-3"
						role="navigation"
						locale="en"
					>
						Experience
					</Link>
				</li>
				<li>
					<Link
						href={routesConfig.app.frontend.public.home.anchors.blog}
						className="group flex items-center py-3"
						role="navigation"
						locale="en"
					>
						Blog
					</Link>
				</li>
			</ul>
		</nav>
	);
};
