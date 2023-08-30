<template>
  <div>
    <section class="i-wrapper pb-56 sm:pb-16 py-16 bg-blue bg-opacity-[0.08]">
      <div class="i-container relative mx-auto">
        <div class="mb-0 text-center sm:text-left">
          <h1 class="text-3xl sm:text-4xl">Notre Blog</h1>
          <div class="max-w-md">
            <p class="text-gray-700 mt-4">
              Notre blog dédié à l'accompagnement novateur des jeunes entrepreneurs
              congolais
            </p>
          </div>
          <div
            class="absolute right-0 flex justify-center items-center sm:justify-end w-full sm:-top-9 sm:right-8"
          >
            <div class="mt-4 sm:mt-0">
              <img class="w-[200px]" src="/img/contents/filters_format.webp" alt="" />
            </div>
          </div>

          <div
            class="z-20 absolute -left-[19px] -bottom-[180px] sm:-bottom-4 lg:relative flex w-full justify-start"
          >
            <div class="flex mx-auto">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="i-wrapper">
      <div class="i-container">
        <ul>
          <li></li>
        </ul>
      </div>
    </section>

    <section class="i-wrapper">
      <div class="i-container py-16 mx-auto">
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

const title = "Blog - Impact Group";

useHead({
  title,
});
</script>
