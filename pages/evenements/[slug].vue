<template>
  <div class="overflow-hidden">
    <section class="i-wrapper sm:py-4 bg-blue bg-opacity-5 border-b border-b-gray-300">
      <div class="i-container relative mx-auto">
        <div class="mb-0">
          <div class="flex items-center py-4 overflow-x-auto whitespace-nowrap">
            <NuxtLink to="/" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
            </NuxtLink>

            <span class="mx-3 text-gray-400 rtl:-scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>

            <NuxtLink to="/evenements" class="hover:underline"> Événements </NuxtLink>

            <span class="mx-3 text-gray-400 rtl:-scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>

            <NuxtLink :to="''" class="hover:underline">
              <p class="max-w-[100px] sm:max-w-[300px] truncate">
                {{ route.params.slug }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="i-wrapper">
      <div class="i-container py-24">
        <div class="text-center">
          <h1 class="text-3xl sm:text-4xl">{{ route.params.slug }}</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
