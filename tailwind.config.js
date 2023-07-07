/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
	theme: {
		extend: {
			colors: {
				primary: "#FD7237",
				blue: "#050564",
				blue_1: "#05C4FB",
				yellow: "#FFA83B"
			},
			fontFamily: {
				sans: ["Satoshi", "Arial", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"]
			}
		}
	},
	plugins: []
};
