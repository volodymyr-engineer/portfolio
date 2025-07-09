import { FlatCompat } from '@eslint/eslintrc';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import storybook from 'eslint-plugin-storybook';
import type { Linter } from 'eslint';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname
});

const eslintConfig: Linter.Config[] = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		files: ['**/*.tsx'],
		plugins: {
			'jsx-a11y': jsxA11yPlugin
		},
		rules: {
			...jsxA11yPlugin.configs.recommended.rules
		}
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		rules: {
			'no-console': 'error',
			'react/jsx-max-props-per-line': [
				'error',
				{
					maximum: 2
				}
			]
		}
	},
	{
		files: ['**/*.tsx'],
		rules: {
			'react/jsx-no-literals': 'error',
			'no-restricted-imports': [
				'error',
				{
					name: 'next/link',
					message: 'Please import from `@/i18n/navigation` instead.'
				},
				{
					name: 'next/navigation',
					importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
					message: 'Please import from `@/i18n/navigation` instead.'
				}
			]
		}
	},
	...storybook.configs['flat/recommended'],
	eslintPluginPrettierRecommended,
	{
		files: ['**/*.tsx'],
		rules: {
			'prettier/prettier': ['error', { endOfLine: 'auto' }]
		}
	}
];

export default eslintConfig;
