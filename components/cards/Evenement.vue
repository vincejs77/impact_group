<template>
  <article class="w-full i-card">
    <NuxtLink :to="'/evenements/' + slug.current + '#' + _id" class="group">
      <div
        class="group items-center flex-col sm:flex-row p-4 sm:p-6 h-full bg-white border group-hover:border-gray-300 rounded-xl"
      >
        <div class="bg-blue rounded-lg overflow-hidden w-full sm:w-full h-[250px]">
          <img
            class="w-full h-full object-cover transform group-hover:scale-125 scale-105 transition ease-in-out duration-1000"
            :src="imageUrl.url"
            :alt="titre"
          />
        </div>
        <div class="flex flex-wrap justify-between items-center -m-2 mt-4 relative">
          <div class="w-auto p-2">
            <div class="flex justify-start space-x-3">
              <p
                v-if="status == 'a_venir'"
                class="bg-green-500 text-white font-semibold inline-block mb-3 px-2.5 py-1 text-xs uppercase rounded-md"
              >
                À venir
              </p>

              <p
                v-else
                class="bg-opacity-70 bg-blue text-white font-semibold inline-block mb-3 px-2.5 py-1 text-xs uppercase rounded-md"
              >
                Passé
              </p>

              <ul>
                <li
                  :key="categorie"
                  v-for="categorie in categories_evenements"
                  class="font-semibold inline-block mb-3 mr-3 px-2.5 py-1 text-xs text-blue_1 bg-blue_1 bg-opacity-10 uppercase rounded-md"
                >
                  {{ categorie.titre }}
                </li>
              </ul>
            </div>
            <h3
              class="group-hover:text-primary mb-2.5 text-xl font-bold font-heading leading-snug"
            >
              <span class="i-underline-animation--txt">
                {{ titre }}
              </span>
            </h3>
            <p class="text-sm text-gray-600 font-medium">
              <span class="text-gray-800">{{ lieu }}</span>
              <span class="px-2">—</span>
              <span
                >Du {{ $convertDate__index(startedAt, "d", "fr") }} au
                {{ $convertDate__index(endedAt, "", "fr") }}</span
              >
            </p>
          </div>

          <div class="w-auto absolute -top-9 right-0">
            <div
              class="flex items-center justify-center w-9 h-9 bg-blue_1 group-hover:bg-primary rounded-full"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33333 3.33337L14 8.00004M14 8.00004L9.33333 12.6667M14 8.00004L2 8.00004"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
const { $convertDate__index } = useNuxtApp();

defineProps({
  _id: String,
  titre: String,
  status: String,
  mode: String,
  slug: {
    type: Object,
    default: function () {
      return {
        current: String,
      };
    },
  },

  lieu: String,
  imageUrl: {
    type: Object,
    default: function () {
      return {
        url: String,
      };
    },
  },
  categories_evenements: {
    type: Object,
    default: function () {
      return {
        title: String,
      };
    },
  },
  publishedAt: String,
  startedAt: String,
  endedAt: String,
});
</script>
