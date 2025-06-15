import { FlatCompat } from '@eslint/eslintrc';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
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
	eslintPluginPrettierRecommended
];

export default eslintConfig;
