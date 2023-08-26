<template>
  <div>
    <section class="i-wrapper py-16">
      <div class="i-container mx-auto">
        <div class="mb-8 text-center">
          <h1 class="text-3xl sm:text-4xl">Nos Événements</h1>
          <p class="text-gray-600">Passés et à venir</p>
        </div>

        <div class="md:max-w-2xl mx-auto">
          <div class="flex flex-wrap space-y-8">
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
</script>
