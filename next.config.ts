import createNextIntlPlugin from 'next-intl/plugin';
// import ESLintPlugin from 'eslint-webpack-plugin';
// import * as envalid from 'envalid';
import type { NextConfig } from 'next';

// export const validationEnvFile = () => {
// 	envalid.cleanEnv(process.env, {
// 		NEXT_PUBLIC_HTTP_PROTOCOL: envalid.str(),
// 		NEXT_PUBLIC_HTTP_DOMAIN: envalid.str(),
// 		NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE: envalid.str()
// 	});
// };

const nextConfig: NextConfig = {
	// reactStrictMode: true,

	webpack: (config) => {
		// validationEnvFile();
		//
		// config.plugins.push(
		// 	new ESLintPlugin({
		// 		extensions: ['ts', 'tsx'],
		// 		exclude: ['node_modules'],
		// 		failOnError: true
		// 	})
		// );

		return config;
	}
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
