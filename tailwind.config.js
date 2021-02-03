module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['"Source Sans Pro"', 'sans-serif'],
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
		},
		extend: {
			colors: {
				main: {
					light: '#275791',
					secondary: '#275791',
					DEFAULT: '#1e325c',
					primary: '#1e325c',
					dark: '#1e325c',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
