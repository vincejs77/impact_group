<template>
  <div>
    <section class="i-wrapper py-16 sm:py-24 bg-blue bg-opacity-[0.06]">
      <div class="i-container mx-auto relative pb-[135px] lg:pb-0">
        <div class="text-center lg:text-left">
          <p class="mb-3 text-xs text-primary font-bold uppercase">Évènements</p>

          <h1 class="text-3xl sm:text-4xl max-w-xl mx-auto lg:mx-0">
            Vers un avenir entrepreneurial
            <span class="opacity-75"> brillant en RDC </span>
          </h1>
          <div class="mt-6 max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-0">
            <p class="text-gray-600">
              Restez à l'affût des opportunités de réseautage, d'apprentissage et
              d'innovation qui rassemblent les esprits créatifs et les entrepreneurs
              congolais.
            </p>
          </div>
          <div
            class="z-20 absolute -left-[19px] -bottom-6 lg:-bottom-12 lg:relative flex w-full justify-center items-center"
          >
            <div class="flex mx-auto">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
            </div>
          </div>
          <div
            class="w-full left-0 lg:left-auto flex justify-center lg:justify-end absolute lg:right-8 lg:-top-12"
          >
            <img
              class="w-[200px] lg:w-[300px]"
              src="/img/contents/filters_format_events.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="i-wrapper">
      <div class="i-container py-16">
        <div class="md:max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardsEvenement
              v-bind="evenement"
              :key="evenement"
              v-for="evenement in data_evenements"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const sanity = useSanity();

const query_evenements = ref(
  groq`*[_type == "evenements" && visibility == 'visible'] | order(_createdAt desc){_id,status,mode,slug,titre,description,publishedAt,_updatedAt,startedAt,endedAt,lieu,
  "imageUrl":image.asset->,categories_evenements[]->{titre}}`
);

const [{ data: data_evenements }] = await Promise.all([
  useAsyncData("data-evenement-index", () => sanity.fetch(query_evenements.value)),
]);

const title = "Évènements - Impact Group";
useHead({
  title,
});
</script>
