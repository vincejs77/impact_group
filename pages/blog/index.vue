<template>
  <div>
    <section class="i-wrapper py-16">
      <div class="i-container mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl sm:text-4xl">Notre Blog</h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <CardsArticle
            :key="article"
            v-for="article in data_articles"
            v-bind="article"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const sanity = useSanity();

const query = ref(
  groq`*[_type == "articles"] | order(_createdAt desc){_id,slug,titre,description,publishedAt,_updatedAt,
  "imageUrl":image.asset->,categories_articles[]->{titre},
  auteur->{"imageUrl":image.asset->{url},nom,bio}}`
);

const [{ data: data_articles }] = await Promise.all([
  useAsyncData("data-articles", () => sanity.fetch(query.value)),
]);
</script>
