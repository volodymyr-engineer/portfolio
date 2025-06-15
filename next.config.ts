import createNextIntlPlugin from 'next-intl/plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,

	webpack: (config) => {
		config.plugins.push(
			new ESLintPlugin({
				extensions: ['ts', 'tsx'],
				exclude: ['node_modules'],
				failOnError: true
			})
		);

		return config;
	}
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
