import type { NextPage } from 'next';
import { Spotlight } from 'src/components/spotlight';
import { HeaderBlock } from 'src/components/header';
import { AnchorsBlock } from 'src/components/anchors';
import { SocialMedia } from 'src/components/social-media';

const LandingPage: NextPage = () => {
	return (
		<div className="h-full w-full">
			<Spotlight />
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
						<div>
							<HeaderBlock />
							<AnchorsBlock />
						</div>
						<SocialMedia />
					</header>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
