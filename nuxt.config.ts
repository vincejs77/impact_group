// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/styles/fonts.scss", "~/assets/styles/main.scss"],

	app: {
		head: {
			title: "Impact Group",
			meta: [
				{ charset: "utf-16" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					name: "description",
					content: "Helping Small Business Grow Big"
				},
				{ name: "format-detection", content: "telephone=no" },
				{ property: "og:title", content: "Impact Group" },
				{
					property: "og:description",
					content: "Helping Small Business Grow Big"
				},
				{ property: "og:url", content: "https://impact-group.vercel.app" },
				{
					property: "og:image",
					content: "https://impact-group.vercel.app/img/brand/impact_group_logo.jpg"
				},
				{ name: "twitter:title", content: "Impact Group" },
				{
					name: "twitter:description",
					content: "Helping Small Business Grow Big"
				},
				{
					name: "twitter:image",
					content: "https://impact-group.vercel.app/img/brand/impact_group_logo.jpg"
				},
				{ name: "twitter:card", content: "summary_large_image" }
			],

			link: [
				{
					rel: "me",
					href: "https://twitter.com/impactgroup"
				},
				{ rel: "icon", type: "image/x-icon", href: "/img/favicons/favicon.ico" },
				{
					rel: "apple-touch-icon",
					sizes: "76x76",
					href: "/img/favicons/apple-touch-icon.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/img/favicons/favicon-32x32.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/img/favicons/favicon-16x16.png"
				},

				{
					rel: "mask-icon",
					href: "/img/favicons/safari-pinned-tab.svg",
					color: "#5bbad5"
				}
			],
			noscript: [{ children: "Javascript est désactivé" }]
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	}
});
