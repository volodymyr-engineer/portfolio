import type { NextPage } from 'next';
import { Spotlight } from 'src/components/spotlight';

const LandingPage: NextPage = () => {
	return (
		<div className="h-full w-full">
			<Spotlight />
		</div>
	);
};

export default LandingPage;
