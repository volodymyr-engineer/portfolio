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
				protocols: {
					tcpIp: 'https://www.techtarget.com/searchnetworking/definition/TCP-IP',
					lan: 'https://en.wikipedia.org/wiki/Local_area_network',
					wan: 'https://en.wikipedia.org/wiki/Wide_area_network',
					ftp: 'https://en.wikipedia.org/wiki/File_Transfer_Protocol',
					http: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
					https: 'https://developer.mozilla.org/en-US/docs/Glossary/HTTPS',
					sslTls: 'https://en.wikipedia.org/wiki/Transport_Layer_Security',
					dns: 'https://en.wikipedia.org/wiki/Domain_Name_System'
				},
				usefulLinks: {
					internetHistory:
						'https://sites.google.com/view/bezpecnyj-internet/%D1%96%D1%81%D1%82%D0%BE%D1%80%D1%96%D1%8F-%D1%96%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D1%83',
					howDoesInternetWork:
						'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work',
					stanfordUniversityAboutInternet: 'https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm'
				}
			}
		}
	}
});
