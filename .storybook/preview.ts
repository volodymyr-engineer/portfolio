import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		a11y: {
			test: 'error'
		}
	}
};

export default preview;
