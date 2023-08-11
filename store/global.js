import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
	id: "wxr-global-store",
	state: () => {
		return {
			isLoadingPage: true
		};
	}
});
