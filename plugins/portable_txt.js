import htm from "htm";
import vhtml from "vhtml";
import { toHTML, uriLooksSafe } from "@portabletext/to-html";

export default defineNuxtPlugin({
	name: "theme",
	enforce: "pre",
	async setup(nuxtApp) {
		const portable_txt_to_html = (body_txt) => {
			const html = htm.bind(vhtml);
			const myPortableTextComponents = {
				types: {
					image: ({ value }) => html`<img src="${value.imageUrl.url}" />`,
					callToAction: ({ value, isInline }) => (isInline ? html`<a href="${value.url}" target="_blank" rel="noopener noreferer">${value.text}</a>` : html`<div class="callToAction">${value.text}</div>`)
				},

				marks: {
					link: ({ children, value }) => {
						const href = value.href || "";

						if (uriLooksSafe(href)) {
							const rel = href.startsWith("/") ? undefined : "noreferrer noopener";
							return html`<a href="${href}" target="_blank" rel="${rel}">${children}</a>`;
						}

						return children;
					}
				}
			};
			const content = toHTML(body_txt, {
				components: myPortableTextComponents
			});

			return content;
		};
		return {
			provide: {
				portable_txt_to_html
			}
		};
	}
});
