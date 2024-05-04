/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				nav: '#09080c',
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#4228d1',
					secondary: '#f6d860',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#121117',
					'base-200': '#09080c',
				},
			},
		],
	},
	plugins: [daisyui],
};
