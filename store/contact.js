import { defineStore } from "pinia";

export const useConstactStore = defineStore({
	id: "i-contact-store",
	state: () => {
		return {
			_objet: 0
		};
	}
});
