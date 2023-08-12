<template>
  <div class="w-full">
    <NuxtLink class="group" to="#">
      <div
        class="p-4 sm:p-6 h-full bg-white border group-hover:border-gray-300 rounded-xl"
      >
        <div class="flex flex-wrap justify-between items-center -m-2">
          <div class="w-auto p-2">
            <div class="flex justify-start space-x-3">
              <p
                v-if="status == 'passé'"
                class="bg-opacity-70 bg-blue text-white font-semibold inline-block mb-3 px-2.5 py-1 text-xs uppercase rounded-md"
              >
                Passé
              </p>

              <p
                v-else
                class="bg-green-500 text-white font-semibold inline-block mb-3 px-2.5 py-1 text-xs uppercase rounded-md"
              >
                À venir
              </p>

              <p
                class="font-semibold inline-block mb-3 px-2.5 py-1 text-xs text-blue_1 bg-blue_1 bg-opacity-10 uppercase rounded-md"
              >
                Formation
              </p>
            </div>
            <h3 class="mb-2.5 text-xl font-bold font-heading leading-snug">
              {{ titre }}
            </h3>
            <p class="text-sm text-gray-600 font-medium">
              <span class="text-gray-800">{{ place }}</span>
              <span class="px-2">—</span>
              <span>Du 2 sept. 2023 au 8 sept. 2023</span>
            </p>
          </div>
          <div class="w-auto p-2">
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
  </div>
</template>

<script setup>
defineProps({
  titre: String,
  status: String,
  place: String,
});
</script>
