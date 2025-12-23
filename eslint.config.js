import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));
const configDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	{
		ignores: [
			'.DS_Store',
			'node_modules',
			'build',
			'.svelte-kit',
			'package',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
			'.sst',
			'sst.config.ts'
		]
	},
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	{
		files: ['**/*.ts', '**/*.js', '**/*.tsx', '**/*.jsx'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node, ...globals.es2016 },
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2024,
				tsConfigRootDir: configDir,
				project: ['./tsconfig.json']
			}
		},
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node, ...globals.es2016 },
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'], // Add support for additional file extensions, such as .svelte
				parser: ts.parser,

				svelteConfig
			}
		},
		rules: {
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	// Prettier config must be last to override other configs
	prettierConfig
);
