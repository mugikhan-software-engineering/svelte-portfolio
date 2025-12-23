import { join } from 'path';
import forms from '@tailwindcss/forms';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Monsterrat']
			},
			screens: {
				xxs: { max: '290px' },
				xs: { max: '639px' }
			}
		}
	},
	plugins: [
		forms,
	]
};

export default config;
