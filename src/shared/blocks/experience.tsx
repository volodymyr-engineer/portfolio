import { useTranslations } from 'next-intl';
import { ExperienceCard as Card } from 'src/shared/components/experience-card';
import { routesConfig } from 'src/routes.config';

export const Experience = () => {
	const translation = useTranslations('Main.experience');

	return (
		<section
			id={routesConfig.app.frontend.public.home.anchors.experience}
			aria-label={translation('aria-label')}
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h3 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">{translation('label')}</h3>
			</div>
			<ol className="group/list">
				<li className="mb-12">
					<Card
						workPeriod={{
							label: translation('NoviSign-company.front-end.work-period.label'),
							ariaLabel: translation('NoviSign-company.front-end.work-period.aria-label')
						}}
						link={{
							href: routesConfig.external.companies.noviSign,
							label: translation('NoviSign-company.front-end.link.label'),
							ariaLabel: translation('NoviSign-company.front-end.link.aria-label')
						}}
						description={translation('NoviSign-company.front-end.description')}
						technologies={{
							ariaLabel: translation('NoviSign-company.front-end.tags.aria-label'),
							tags: [
								translation('NoviSign-company.front-end.tags.Angular'),
								translation('NoviSign-company.front-end.tags.TypeScript'),
								translation('NoviSign-company.front-end.tags.RxJs'),
								translation('NoviSign-company.front-end.tags.HTML'),
								translation('NoviSign-company.front-end.tags.i18n')
							]
						}}
					/>
				</li>
				<li className="mb-12">
					<Card
						workPeriod={{
							label: translation('NoviSign-company.automation-qa.work-period.label'),
							ariaLabel: translation('NoviSign-company.automation-qa.work-period.aria-label')
						}}
						link={{
							href: routesConfig.external.companies.noviSign,
							label: translation('NoviSign-company.automation-qa.link.label'),
							ariaLabel: translation('NoviSign-company.automation-qa.link.aria-label')
						}}
						description={translation('NoviSign-company.automation-qa.description')}
						technologies={{
							ariaLabel: translation('NoviSign-company.automation-qa.tags.aria-label'),
							tags: [
								translation('NoviSign-company.automation-qa.tags.Cypress'),
								translation('NoviSign-company.automation-qa.tags.TypeScript'),
								translation('NoviSign-company.automation-qa.tags.GitHub-actions'),
								translation('NoviSign-company.automation-qa.tags.Jenkins'),
								translation('NoviSign-company.automation-qa.tags.Docker')
							]
						}}
					/>
				</li>
				<li className="mb-12">
					<Card
						workPeriod={{
							label: translation('ChatbotsStudio-company.work-period.label'),
							ariaLabel: translation('ChatbotsStudio-company.work-period.aria-label')
						}}
						link={{
							href: routesConfig.external.companies.chatbotsStudio,
							label: translation('ChatbotsStudio-company.link.label'),
							ariaLabel: translation('ChatbotsStudio-company.link.aria-label')
						}}
						description={translation('ChatbotsStudio-company.description')}
						technologies={{
							ariaLabel: translation('ChatbotsStudio-company.tags.aria-label'),
							tags: [
								translation('ChatbotsStudio-company.tags.JavaScript'),
								translation('ChatbotsStudio-company.tags.NodeJS'),
								translation('ChatbotsStudio-company.tags.Telegram'),
								translation('ChatbotsStudio-company.tags.AWS'),
								translation('ChatbotsStudio-company.tags.MongoDB')
							]
						}}
					/>
				</li>
				<li className="mb-12">
					<Card
						workPeriod={{
							label: translation('Brainence-company.middle.work-period.label'),
							ariaLabel: translation('Brainence-company.middle.work-period.aria-label')
						}}
						link={{
							href: routesConfig.external.companies.brainence,
							label: translation('Brainence-company.middle.link.label'),
							ariaLabel: translation('Brainence-company.middle.link.aria-label')
						}}
						description={translation('Brainence-company.middle.description')}
						technologies={{
							ariaLabel: translation('Brainence-company.middle.tags.aria-label'),
							tags: [
								translation('Brainence-company.middle.tags.TypeScript'),
								translation('Brainence-company.middle.tags.NodeJS'),
								translation('Brainence-company.middle.tags.NestJS'),
								translation('Brainence-company.middle.tags.React'),
								translation('Brainence-company.middle.tags.NextJS'),
								translation('Brainence-company.middle.tags.GraphQL'),
								translation('Brainence-company.middle.tags.MongoDB'),
								translation('Brainence-company.middle.tags.PostgreSQL'),
								translation('Brainence-company.middle.tags.Docker')
							]
						}}
					/>
				</li>
				<li className="mb-12">
					<Card
						workPeriod={{
							label: translation('Brainence-company.junior.work-period.label'),
							ariaLabel: translation('Brainence-company.junior.work-period.aria-label')
						}}
						link={{
							href: routesConfig.external.companies.brainence,
							label: translation('Brainence-company.junior.link.label'),
							ariaLabel: translation('Brainence-company.junior.link.aria-label')
						}}
						description={translation('Brainence-company.junior.description')}
						technologies={{
							ariaLabel: translation('Brainence-company.junior.tags.aria-label'),
							tags: [
								translation('Brainence-company.junior.tags.JavaScript'),
								translation('Brainence-company.junior.tags.TypeScript'),
								translation('Brainence-company.junior.tags.NodeJS'),
								translation('Brainence-company.junior.tags.NestJS'),
								translation('Brainence-company.junior.tags.PostgreSQL'),
								translation('Brainence-company.junior.tags.React'),
								translation('Brainence-company.junior.tags.Material-UI'),
								translation('Brainence-company.junior.tags.HTML')
							]
						}}
					/>
				</li>
				<li className="mb-12">
					<Card
						workPeriod={{
							label: translation('Brainence-company.trainee.work-period.label'),
							ariaLabel: translation('Brainence-company.trainee.work-period.aria-label')
						}}
						link={{
							href: routesConfig.external.companies.brainence,
							label: translation('Brainence-company.trainee.link.label'),
							ariaLabel: translation('Brainence-company.trainee.link.aria-label')
						}}
						description={translation('Brainence-company.trainee.description')}
						technologies={{
							ariaLabel: translation('Brainence-company.trainee.tags.aria-label'),
							tags: [
								translation('Brainence-company.trainee.tags.JavaScript'),
								translation('Brainence-company.trainee.tags.NodeJS'),
								translation('Brainence-company.trainee.tags.Express'),
								translation('Brainence-company.trainee.tags.React'),
								translation('Brainence-company.trainee.tags.MongoDB')
							]
						}}
					/>
				</li>
			</ol>
			<div className="mt-12">
				<a
					href={routesConfig.app.frontend.public.resume}
					target="_blank"
					rel="noreferrer noopener"
					aria-label={translation('resume.aria-label')}
					className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
				>
					{translation('resume.label')}
					<svg
						className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
						aria-hidden="true"
					>
						<use href="/assets/sprite.svg#icon-arrow-right" />
					</svg>
				</a>
			</div>
		</section>
	);
};
