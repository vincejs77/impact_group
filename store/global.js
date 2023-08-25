import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
	id: "wxr-global-store",
	state: () => {
		return {
			isLoadingPage: true,
			isOpenModal_galerie: false,
			currentIndex_galerie: 0,
			lengthData_galerie: 1,
			isOpenModal_rm: false
		};
	}
});
