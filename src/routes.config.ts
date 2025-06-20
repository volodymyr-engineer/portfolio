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
				resume: '/resume.pdf'
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
