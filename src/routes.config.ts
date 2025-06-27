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
					cssModern: '/blog/modern-css',
					cssPosition: '/blog/css-position',
					cssUnitsOfMeasurement: '/blog/css-units-of-measurement',
					htmlAccessibility: '/blog/html-accessibility',
					htmlModern: '/blog/html-modern',
					browserAndInternet: '/blog/browser-and-internet'
				}
			}
		},
		backend: {}
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
		}
	}
});
