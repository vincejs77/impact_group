<template>
  <div>
    <section class="i-wrapper py-16 bg-blue bg-opacity-[0.06]">
      <div class="i-container mx-auto">
        <div class="max-w-xl mx-auto text-center">
          <p class="mb-3 text-xs text-primary font-bold uppercase">Galerie</p>

          <h1 class="text-3xl sm:text-4xl">
            Notre impact <span class="text-blue opacity-80">en images</span>
          </h1>
          <div class="mt-4">
            <p class="text-gray-600">
              Explorez notre galerie photo pour voir notre engagement en action, chaque
              image reflète notre engagement envers le changement positif en République
              Démocratique du Congo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="i-wrapper">
      <div class="i-container">
        <div class="w-full py-10 max-w-2xl mx-auto">
          <ul class="flex justify-center flex-wrap gap-4">
            <li
              :class="[
                currentCategorieID == null
                  ? 'bg-blue text-white'
                  : 'bg-gray-200 text-blue',
                ' transition-colors duration-300 cursor-pointer  rounded-md px-4 font-medium py-1 text-sm hover:bg-primary hover:text-white',
              ]"
            >
              <button @click="resetGalerie_fx(null)" type="button">Toutes</button>
            </li>
            <li :key="categorie" v-for="categorie in data_categories_gallerie">
              <button
                type="button"
                :class="[
                  currentCategorieID == categorie._id
                    ? 'bg-blue text-white'
                    : 'bg-gray-200 text-blue',
                  ' transition-colors duration-300 cursor-pointer  rounded-md px-4 font-medium py-1 text-sm hover:bg-primary hover:text-white',
                ]"
                @click="refreshGalerie_fx(categorie._id)"
              >
                {{ categorie.titre }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="i-wrapper">
      <div class="i-container pb-16">
        <div v-if="data_galerie.length == 0 && !pending_galerie" class="text-center">
          <div class="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </div>
          <div class="mt-4 max-w-sm mx-auto">
            <p class="text-gray-500">
              Aucune image disponible pour la catégorie sélectionnée pour le moment !
            </p>
          </div>
        </div>
        <div v-if="!pending_galerie" class="columns-1 md:columns-3 lg:columns-3">
          <div
            :key="image"
            v-for="(image, index) in data_galerie"
            @click="
              _openModal_galerie();
              _showDetails(index);
            "
            class="rounded-lg overflow-hidden group cursor-pointer relative mb-4 before:z-10 before:content-[''] before:rounded-md before:absolute before:inset-0 before:opacity-80 before:bg-gradient-to-t via-transparent before:from-blue before:to-transparent"
          >
            <div class="">
              <div class="w-full h-full min-[200px] bg-blue">
                <img
                  class="min-h-[200px] transition duration-500 ease-in-out group-hover:scale-125 w-full"
                  :src="image.imageUrl.url"
                />
              </div>
              <div class="z-10 test__body absolute inset-0 p-4 text-white flex flex-col">
                <div class="mb-auto">
                  <ul class="flex justify-start items-center flex-wrap -mt-4">
                    <li
                      :key="categorie"
                      v-for="categorie in image.categories_gallerie"
                      class="mr-4 mt-4 text-xs test__tag bg-white text-blue bg-opacity-80 py-1 px-4 rounded-md"
                    >
                      <span class="font-medium">
                        {{ categorie.titre }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="relative">
                  <p class="text-md font-semibold line-clamp-2 leading-[1.3]">
                    {{ image.titre }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="columns-1 md:columns-3 lg:columns-3">
          <div
            :key="i"
            v-for="i in 3"
            class="mb-4 relative animate-pulse w-full min-h-[200px] bg-blue bg-opacity-10 rounded-lg overflow-hidden group cursor-pointer"
          >
            <div class="rounded-md h-5 absolute left-4 right-4 top-4">
              <div class="w-1/3 bg-white h-5 rounded-md"></div>
            </div>

            <div class="rounded-md h-5 absolute left-4 right-4 bottom-4 bg-white"></div>
          </div>
        </div>
      </div>
    </section>

    <ModalsGalerieViewer
      :isOpenModal_galerie="useGlobalStore().$state.isOpenModal_galerie"
      :closeModal_galerie="_closeModal_galerie"
      :titre="data_galerie[useGlobalStore().$state.currentIndex_galerie]?.titre"
      :description="
        data_galerie[useGlobalStore().$state.currentIndex_galerie]?.description
      "
      :imageUrl="data_galerie[useGlobalStore().$state.currentIndex_galerie]?.imageUrl"
      :categories_gallerie="
        data_galerie[useGlobalStore().$state.currentIndex_galerie]?.categories_gallerie
      "
    />
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";

const sanity = useSanity();

const query_categories_gallerie = computed(() => {
  return groq`*[_type == "categories_gallerie"] {_id,titre}`;
});

const query = ref(
  groq`*[_type == "galerie"]| order(_createdAt desc){_id,titre,description,_updatedAt,_createdAt,"imageUrl":image.asset->,categories_gallerie[]->{titre}}`
);
const [
  {
    data: data_galerie,
    refresh: refresh_galerie,
    pending: pending_galerie,
    error: error_galerie,
  },
  {
    data: data_categories_gallerie,
    refresh: refresh_categories_gallerie,
    pending: pending_categories_gallerie,
    error: error_categories_gallerie,
  },
] = await Promise.all([
  useAsyncData("data-galerie", () => sanity.fetch(query.value)),
  useAsyncData("data-categories-galerie", () =>
    sanity.fetch(query_categories_gallerie.value)
  ),
]);

watch(data_galerie.value, (newDataGalerie) => {});

useGlobalStore().$state.lengthData_galerie = data_galerie.value.length;

const currentCategorieID = ref(null);

const resetGalerie_fx = async (_currentCategorieID) => {
  query.value = groq`*[_type == "galerie"]| order(_createdAt desc){_id,titre,description,_updatedAt,_createdAt,"imageUrl":image.asset->,categories_gallerie[]->{titre}}`;
  await refresh_galerie();
  currentCategorieID.value = _currentCategorieID;
  useGlobalStore().$state.lengthData_galerie = data_galerie.value.length;
};

const refreshGalerie_fx = async (_currentCategorieID) => {
  query.value = groq`*[_type == "galerie" && categories_gallerie[]._ref == "${_currentCategorieID}" ]| order(_createdAt desc){_id,titre,description,_updatedAt,_createdAt,"imageUrl":image.asset->,categories_gallerie[]->{titre,_id}}`;
  await refresh_galerie();
  currentCategorieID.value = _currentCategorieID;
  useGlobalStore().$state.lengthData_galerie = data_galerie.value.length;
};

const _openModal_galerie = async () => {
  useGlobalStore().$state.isOpenModal_galerie = true;
};

const _closeModal_galerie = async () => {
  useGlobalStore().$state.isOpenModal_galerie = false;
};

const _showDetails = async (index) => {
  useGlobalStore().$state.currentIndex_galerie = index;
};

const title = "Galerie - Impact Group";

useHead({
  title,
});
</script>
