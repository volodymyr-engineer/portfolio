import { Quote } from 'src/shared/blocks/quote';

export const routesConfig = Object.freeze({
	app: {
		frontend: {
			public: {
				home: {
					root: '/',
					anchors: {
						about: 'about',
						experience: 'experience',
						blog: 'blog'
					}
				},
				resume: '/assets/pdf/resume.pdf',
				blog: {
					root: '/blog',
					posts: {
						internetBasicUnderstanding: '/blog/internet-basic-understanding'
					}
				}
			}
		}
	},
	external: {
		socialMedia: {
			linkedin: 'https://www.linkedin.com/in/shylo-volodymyr',
			github: 'https://github.com/volodymyr-engineer',
			codepen: 'https://codepen.io/mind-controle'
		},
		companies: {
			noviSign: 'https://www.novisign.com',
			chatbotsStudio: 'https://chatbots.studio',
			brainence: 'https://brainence.com'
		},
		quote: {
			martinFowler: 'https://www.martinfowler.com/'
		},
		posts: {
			internetBasicUnderstanding: {
				usefulLinks: {
					internetHistory:
						'https://sites.google.com/view/bezpecnyj-internet/%D1%96%D1%81%D1%82%D0%BE%D1%80%D1%96%D1%8F-%D1%96%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D1%83',
					howDoesInternetWork: 'How does the Internet Work?'
				}
			}
		}
	}
});
