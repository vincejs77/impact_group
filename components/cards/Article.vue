<template>
  <article class="i-card w-auto group">
    <div class="max-w-sm mx-auto">
      <div class="mb-4 flex justify-start items-center space-x-2">
        <img
          :src="auteur.imageUrl?.url"
          class="w-6 h-6 rounded-full object-cover bg-blue"
          alt=""
        />
        <p class="text-sm font-medium text-gray-500">
          Par <span class="text-gray-700">{{ auteur.nom }}</span>
        </p>
      </div>
      <div
        class="min-h-[130px] sm:min-h-[130px] xl:min-h-[180px] bg-blue mb-6 max-w-max overflow-hidden rounded-xl"
      >
        <NuxtLink :to="'/blog/' + slug.current + '#' + _id">
          <img
            class="w-full h-full object-cover transform group-hover:scale-125 scale-105 transition ease-in-out duration-1000"
            :src="imageUrl?.url"
            :alt="titre"
          />
        </NuxtLink>
      </div>
      <div>
        <ul>
          <li
            :key="categorie"
            v-for="categorie in categories_articles"
            class="mb-4 font-sans max-w-max px-3 py-1.5 text-xs text-blue_1 bg-blue_1 bg-opacity-10 font-semibold uppercase rounded-md"
          >
            {{ categorie?.titre }}
          </li>
        </ul>
      </div>

      <div>
        <NuxtLink
          :to="'/blog/' + slug?.current + '#' + _id"
          class="mb-2 inline-block group-hover:text-primary"
        >
          <h3 class="text-lg font-bold font-heading leading-normal line-clamp-2">
            <span class="i-underline-animation--txt">
              {{ titre }}
            </span>
          </h3>
        </NuxtLink>
      </div>
      <p class="text-gray-600 font-medium leading-relaxed line-clamp-2">
        {{ description }}
      </p>
      <div class="mt-4 flex justify-between items-center">
        <div>
          <NuxtLink
            :to="'/blog/' + slug?.current + '#' + _id"
            class="flex justify-start items-center text-semibold text-primary"
          >
            <span>Lire plus</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-3 h-3 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  _id: String,
  titre: String,
  description: String,
  slug: {
    type: Object,
    default: function () {
      return {
        current: String,
      };
    },
  },
  imageUrl: {
    type: Object,
    default: function () {
      return {
        url: String,
      };
    },
  },
  categories_articles: {
    type: Object,
    default: function () {
      return {
        title: String,
      };
    },
  },
  auteur: {
    type: Object,
    default: function () {
      return {
        nom: String,
        imageUrl: {
          type: Object,
          default: function () {
            return {
              url: String,
            };
          },
        },
      };
    },
  },
});
</script>
