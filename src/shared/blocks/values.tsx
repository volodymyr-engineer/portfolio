import { useTranslations } from 'next-intl';
import { ValueCard } from 'src/shared/components/value-card';

export const Values = () => {
	const translation = useTranslations('Home-Page.main.values');

	return (
		<section id="values" aria-label={translation('aria-label')} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
			<div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h3 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">{translation('label')}</h3>
			</div>
			<ul className="group/list">
				<li className="mb-12">
					<ValueCard title={translation('mission.title')} description={translation('mission.description')} icon="icon-rocket-launch" />
				</li>
				<li className="mb-12">
					<ValueCard title={translation('goal.title')} description={translation('goal.description')} icon="icon-my-location" />
				</li>
				<li className="mb-12">
					<ValueCard title={translation('values.title')} description={translation('values.description')} icon="icon-psychiatry" />
				</li>
			</ul>
		</section>
	);
};
