export default defineNuxtPlugin({
	name: "theme",
	enforce: "pre",
	async setup(nuxtApp) {
		const convertDate__index = (date: any, type: string, lang: string) => {
			if (type == "dmy") {
				return new Date(date).toLocaleDateString(lang, {
					month: "short",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric"
				});
			} else if (type == "d") {
				return new Date(date).toLocaleDateString(lang, {
					day: "numeric",
					month: "short"
				});
			} else {
				return new Date(date).toLocaleDateString(lang, {
					month: "short",
					day: "numeric",
					year: "numeric"
				});
			}
		};

		return {
			provide: {
				convertDate__index
			}
		};
	}
});
