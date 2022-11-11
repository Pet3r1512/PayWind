/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./views/**/*.pug', './views/*.pug', './views/assets/**/*.pug'],
	theme: {
		extend: {
			fontFamily: {
				nunito_sans: ["Nunito Sans", "sans-serif"]
			},
		},
	},
	plugins: [],
};
