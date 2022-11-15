/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				layout: 'auto 1fr',
			},
			gridColumn: {
				'span-nav': '1 / 2',
				'span-main': '2 / 3',
				'span-footer': '1 / 3',
			},
			gridTemplateRows: {
				layout: 'auto 1fr auto',
			},
			gridRow: {
				'span-nav': '1 / 3',
				'span-main': '1 / 2',
				'span-footer': '3 / 4',
			},
		},
	},
	plugins: [],
};
