/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
	theme: {
		extend: {
			colors: {
				primary: "#fd7135",
				blue: "#000061",
				blue_1: "#007cff",
				blue_2: "#02c3fb",
				yellow: "#ffa739"
			},
			fontFamily: {
				sans: ["Creato Display", "Arial", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"]
			}
		}
	},
	plugins: []
};
