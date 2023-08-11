<template>
  <div class="overflow-hidden">
    <div class="bg-gray-200 top-0 h-1 z-[9999] fixed left-0 right-0">
      <NuxtLoadingIndicator color="false" :height="h" />
    </div>
    <BasesNavbar />
    <main class="mt-[60px] lg:mt-[72px]">
      <NuxtPage />
    </main>
    <BasesFooter />
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/store/global";
const nuxtApp = useNuxtApp();

const h = 4;
const color = new Boolean(false);

nuxtApp.hook("page:start", () => {
  useGlobalStore().$state.isLoadingPage = true;
});

nuxtApp.hook("page:finish", () => {
  useGlobalStore().$state.isLoadingPage = false;
});
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -ms-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
}
</style>
