import type { NextPage } from 'next';
import { Header } from 'src/shared/blocks/header';
import { Anchors } from 'src/shared/blocks/anchors';
import { SocialMedia } from 'src/shared/blocks/social-media';
import { AboutMe } from 'src/shared/blocks/about-me';
import { Experience } from 'src/shared/blocks/experience';
import { Values } from 'src/shared/blocks/values';
import { Blog } from 'src/shared/blocks/blog';
import { PortalAnimation } from 'src/shared/components/portal-animation';
import { Quote } from 'src/shared/blocks/quote';

export const dynamic = 'force-static';

const HomePage: NextPage = () => (
	<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
		<div className="lg:flex lg:justify-between lg:gap-4">
			<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
				<div>
					<Header />
					<Anchors />
				</div>
				<SocialMedia />
			</header>
			<main className="pt-24 lg:w-[52%] lg:py-24">
				<AboutMe />
				<Experience />
				<Values />
				<Blog />
				<PortalAnimation />
				<Quote />
			</main>
		</div>
	</div>
);

export default HomePage;
