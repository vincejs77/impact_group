export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("page:transition:finish", () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	});
});
