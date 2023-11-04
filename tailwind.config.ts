import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Monsterrat', ...defaultTheme.fontFamily.sans]
			},
			screens: {
				xxs: { max: '290px' },
				xs: { max: '639px' }
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{ name: 'crimson', enhancements: true },
					{ name: 'gold-nouveau', enhancements: true },
					{ name: 'hamlindigo', enhancements: true },
					{ name: 'modern', enhancements: true },
					{ name: 'rocket', enhancements: true },
					{ name: 'sahara', enhancements: true },
					{ name: 'seafoam', enhancements: true },
					{ name: 'skeleton', enhancements: true },
					{ name: 'vintage', enhancements: true },
					{ name: 'wintry', enhancements: true }
				]
			}
		})
	]
} satisfies Config;

export default config;
