export const routesConfig = Object.freeze({
	app: {
		frontend: {
			public: {
				home: {
					root: '/',
					anchors: {
						about: '#about',
						experience: '#experience',
						services: '#services',
						blog: '#blog'
					}
				},
				resume: '/resume.pdf'
			}
		},
		backend: {}
	},
	external: {
		linkedin: 'https://www.linkedin.com/in/shylo-volodymyr',
		github: 'https://github.com/volodymyr-engineer',
		codepen: 'https://codepen.io/mind-controle'
	}
});
