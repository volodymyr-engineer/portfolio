import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PostAnchors } from 'src/shared/components/post-anchors';
import { PostContainer } from 'src/shared/blocks/post-container';
import { PostUsefulLinks } from 'src/shared/components/post-useful-links';
import { routesConfig } from 'src/routes.config';

const anchors = {
	excursionIntoHistory: 'excursion-into-history',
	acquaintance: 'acquaintance',
	workingPrinciple: 'working-principle',
	internetProtocols: 'internet protocols',
	summary: 'summary',
	usefulLinks: 'useful-links'
};

export const dynamic = 'force-static';

const Post = () => {
	const translation = useTranslations('Post:internet-basic-understanding');

	return (
		<PostContainer
			title={translation('title')}
			publicationDate={translation('publication-date')}
			content={
				<>
					<p className="pt-6">{translation('intro')}</p>
					<PostAnchors
						title={translation('table-of-contents.label')}
						anchors={[
							{
								href: anchors.excursionIntoHistory,
								label: translation('table-of-contents.excursion-into-history.label'),
								ariaLabel: translation('table-of-contents.excursion-into-history.aria-label')
							},
							{
								href: anchors.acquaintance,
								label: translation('table-of-contents.acquaintance.label'),
								ariaLabel: translation('table-of-contents.acquaintance.aria-label')
							},
							{
								href: anchors.workingPrinciple,
								label: translation('table-of-contents.working-principle.label'),
								ariaLabel: translation('table-of-contents.working-principle.aria-label')
							},
							{
								href: anchors.internetProtocols,
								label: translation('table-of-contents.internet-protocols.label'),
								ariaLabel: translation('table-of-contents.internet-protocols.aria-label')
							},
							{
								href: anchors.summary,
								label: translation('table-of-contents.summary.label'),
								ariaLabel: translation('table-of-contents.summary.aria-label')
							},
							{
								href: anchors.usefulLinks,
								label: translation('table-of-contents.useful-links.label'),
								ariaLabel: translation('table-of-contents.useful-links.aria-label')
							}
						]}
					/>
					<section id={anchors.excursionIntoHistory}>
						<h3 className="mt-12 text-2xl font-bold tracking-tight text-slate-200">{translation('excursion-into-history.title')}</h3>
						<p className="mt-6">{translation('excursion-into-history.text.first-part')}</p>
						<p className="my-5 rounded p-4 indent-4 leading-relaxed italic">{translation('excursion-into-history.text.goal')}</p>
						<p className="mt-3">{translation('excursion-into-history.text.second-part')}</p>
						<p className="mt-3">{translation('excursion-into-history.text.world-wide-web')}</p>
						<p className="mt-3">{translation('excursion-into-history.text.web-2')}</p>
					</section>
					<section id={anchors.acquaintance}>
						<h3 className="mt-12 text-2xl font-bold tracking-tight text-slate-200">{translation('acquaintance.title')}</h3>
						<p className="mt-6">{translation('acquaintance.definition')}</p>
						<Image
							src="/assets/blog/internet-basic-understanding/internet-cables.map.webp"
							alt={translation('acquaintance.visualization-internet-cables.image-alt')}
							decoding="async"
							loading="lazy"
							width="928"
							height="500"
							data-nimg="1"
							className="mt-3 rounded"
						/>
						<p className="mt-2 italic">{translation('acquaintance.visualization-internet-cables.description')}</p>
						<p className="mt-6">{translation('acquaintance.direction-of-movement')}</p>
						<Image
							src="/assets/blog/internet-basic-understanding/satellites.illustration.png"
							alt={translation('acquaintance.visualization-satellites-illustration.image-alt')}
							decoding="async"
							loading="lazy"
							width="928"
							height="500"
							data-nimg="1"
							className="mt-3 rounded"
						/>
						<p className="mt-2 italic">{translation('acquaintance.visualization-satellites-illustration.description')}</p>
						<p className="mt-6">{translation('acquaintance.summary')}</p>
					</section>
					<section id={anchors.workingPrinciple}>
						<h3 className="mt-12 text-2xl font-bold tracking-tight text-slate-200">{translation('working-principle.title')}</h3>
						<p className="mt-6">{translation('working-principle.definition')}</p>
						<Image
							src="/assets/blog/internet-basic-understanding/technology.diagram.png"
							alt={translation('working-principle.visualization-technology-diagram.image-alt')}
							decoding="async"
							loading="lazy"
							width="928"
							height="500"
							data-nimg="1"
							className="mt-3 rounded"
						/>
						<p className="mt-2 italic">{translation('working-principle.visualization-technology-diagram.description')}</p>
						<p className="mt-6">{translation('working-principle.visualization-technology-diagram.explanation')}</p>
						<p className="mt-2 italic">{translation('working-principle.note')}</p>
					</section>
					<section id={anchors.internetProtocols}>
						<h3 className="mt-12 text-2xl font-bold tracking-tight text-slate-200">{translation('internet-protocols.title')}</h3>
						<p className="mt-6">{translation('internet-protocols.definition')}</p>
						<p className="mt-6 italic">{translation('internet-protocols.notes')}</p>
						<ul className="mt-3">
							<li>
								<a
									href={routesConfig.external.posts.internetBasicUnderstanding.protocols.tcpIp}
									target="_blank"
									rel="noreferrer noopener"
									aria-label={translation('internet-protocols.tcp.link.aria-label')}
									className="mt-3 mr-2 text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
								>
									{translation('internet-protocols.tcp.link.label')}
								</a>
								<span>{translation('internet-protocols.tcp.description')}</span>
							</li>
							<li>
								<a
									href={routesConfig.external.posts.internetBasicUnderstanding.protocols.tcpIp}
									target="_blank"
									rel="noreferrer noopener"
									aria-label={translation('internet-protocols.ip.link.aria-label')}
									className="mt-3 mr-2 text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
								>
									{translation('internet-protocols.ip.link.label')}
								</a>
								<span>{translation('internet-protocols.ip.description')}</span>
							</li>
							<li>
								<a
									href={routesConfig.external.posts.internetBasicUnderstanding.protocols.lan}
									target="_blank"
									rel="noreferrer noopener"
									aria-label={translation('internet-protocols.lan.link.aria-label')}
									className="mt-3 mr-2 text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
								>
									{translation('internet-protocols.lan.link.label')}
								</a>
								<span>{translation('internet-protocols.lan.description')}</span>
							</li>
							<li>
								<a
									href={routesConfig.external.posts.internetBasicUnderstanding.protocols.wan}
									target="_blank"
									rel="noreferrer noopener"
									aria-label={translation('internet-protocols.wan.link.aria-label')}
									className="mt-3 mr-2 text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
								>
									{translation('internet-protocols.wan.link.label')}
								</a>
								<span>{translation('internet-protocols.wan.description')}</span>
							</li>
							<li>
								<a
									href={routesConfig.external.posts.internetBasicUnderstanding.protocols.ftp}
									target="_blank"
									rel="noreferrer noopener"
									aria-label={translation('internet-protocols.ftp.link.aria-label')}
									className="mt-3 mr-2 text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
								>
									{translation('internet-protocols.ftp.link.label')}
								</a>
								<span>{translation('internet-protocols.ftp.description')}</span>
							</li>
							<li>
								<a
									href={routesConfig.external.posts.internetBasicUnderstanding.protocols.http}
									target="_blank"
									rel="noreferrer noopener"
									aria-label={translation('internet-protocols.http.link.aria-label')}
									className="mt-3 mr-2 text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
								>
									{translation('internet-protocols.http.link.label')}
								</a>
								<span>{translation('internet-protocols.http.description')}</span>
							</li>
							<li>
								<a
									href={routesConfig.external.posts.internetBasicUnderstanding.protocols.https}
									target="_blank"
									rel="noreferrer noopener"
									aria-label={translation('internet-protocols.https.link.aria-label')}
									className="mt-3 mr-2 text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
								>
									{translation('internet-protocols.https.link.label')}
								</a>
								<span>{translation('internet-protocols.https.description')}</span>
							</li>
							<li>
								<a
									href={routesConfig.external.posts.internetBasicUnderstanding.protocols.sslTls}
									target="_blank"
									rel="noreferrer noopener"
									aria-label={translation('internet-protocols.ssl/tls.link.aria-label')}
									className="mt-3 mr-2 text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
								>
									{translation('internet-protocols.ssl/tls.link.label')}
								</a>
								<span>{translation('internet-protocols.ssl/tls.description')}</span>
							</li>
							<li>
								<a
									href={routesConfig.external.posts.internetBasicUnderstanding.protocols.dns}
									target="_blank"
									rel="noreferrer noopener"
									aria-label={translation('internet-protocols.dns.link.aria-label')}
									className="mt-3 mr-2 text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
								>
									{translation('internet-protocols.dns.link.label')}
								</a>
								<span>{translation('internet-protocols.dns.description')}</span>
							</li>
						</ul>
					</section>
					<section id={anchors.summary}>
						<h3 className="mt-12 text-2xl font-bold tracking-tight text-slate-200">{translation('summary.title')}</h3>
						<p className="mt-6">{translation('summary.definition')}</p>
					</section>
					<PostUsefulLinks
						anchorId={anchors.usefulLinks}
						title={translation('useful-links.title')}
						links={[
							{
								href: routesConfig.external.posts.internetBasicUnderstanding.usefulLinks.internetHistory,
								label: translation('useful-links.links.internet-history.label'),
								ariaLabel: translation('useful-links.links.internet-history.aria-label')
							},
							{
								href: routesConfig.external.posts.internetBasicUnderstanding.usefulLinks.howDoesInternetWork,
								label: translation('useful-links.links.how-does-internet-work.label'),
								ariaLabel: translation('useful-links.links.how-does-internet-work.aria-label')
							},
							{
								href: routesConfig.external.posts.internetBasicUnderstanding.usefulLinks.stanfordUniversityAboutInternet,
								label: translation('useful-links.links.stanford-university-about-internet.label'),
								ariaLabel: translation('useful-links.links.stanford-university-about-internet.aria-label')
							}
						]}
					/>
				</>
			}
		/>
	);
};

export default Post;
