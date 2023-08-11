<template>
  <div>
    <section class="i-wrapper py-16">
      <div class="i-container mx-auto">
        <div class="max-w-xl mx-auto text-center">
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
        <div class="w-full mt-8 max-w-2xl mx-auto">
          <ul class="flex justify-center flex-wrap gap-4">
            <li :key="categorie" v-for="categorie in data_categories_gallerie">
              <button
                type="button"
                :class="[
                  currentCategorieID == categorie._id
                    ? 'bg-blue text-white'
                    : 'bg-gray-200 text-blue',
                  'cursor-pointer  rounded-md px-4 font-medium py-1 text-sm',
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
        <div class="columns-1 md:columns-3 lg:columns-3">
          <div
            v-motion-pop
            v-motion-pop-visible
            :key="image"
            v-for="image in data_galerie"
            class="rounded-lg overflow-hidden group cursor-pointer relative mb-4 before:z-10 before:content-[''] before:rounded-md before:absolute before:inset-0 before:opacity-60 before:bg-gradient-to-t via-transparent before:from-blue before:to-transparent"
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
                  <a class="test__link absolute inset-0" target="_blank" href="/"></a>
                  <p class="text-lg leading-snug font-medium line-clamp-2">
                    {{ image.titre }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const sanity = useSanity();

const query_categories_gallerie = computed(() => {
  return groq`*[_type == "categories_gallerie"] {_id,titre}`;
});

const query = ref(
  groq`*[_type == "galerie"]| order(_createdAt desc){_id,titre,_updatedAt,_createdAt,"imageUrl":image.asset->,categories_gallerie[]->{titre}}`
);
const [
  { data: data_galerie, refresh: refresh_galerie },
  { data: data_categories_gallerie, refresh: refresh_categories_gallerie },
] = await Promise.all([
  useAsyncData("data-galerie", () => sanity.fetch(query.value)),
  useAsyncData("data-categories-galerie", () =>
    sanity.fetch(query_categories_gallerie.value)
  ),
]);

watch(data_galerie.value, (newDataGalerie) => {});

const currentCategorieID = ref("");

const refreshGalerie_fx = async (_currentCategorieID) => {
  query.value = groq`*[_type == "galerie" && categories_gallerie[]._ref == "${_currentCategorieID}" ]| order(_createdAt desc){_id,titre,_updatedAt,_createdAt,"imageUrl":image.asset->,categories_gallerie[]->{titre,_id}}`;
  await refresh_galerie();
  currentCategorieID.value = _currentCategorieID;
};
//Comment test
</script>
