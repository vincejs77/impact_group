import { defineStore } from "pinia";

export const useConstactStore = defineStore({
	id: "i-contact-store",
	state: () => {
		return {
			isError: false,
			isSuccess: false
		};
	}
});
