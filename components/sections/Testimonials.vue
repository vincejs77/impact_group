<template>
  <div class="cursor-grab w-full pb-8 sm:pb-0 bg-blue overflow-hidden rounded-md">
    <Swiper
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation, SwiperEffectFade]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="item in data_testimonials" :key="item">
        <div
          class="bg-blue text-white rounded-md flex justify-between flex-col min-h-full lg:flex-row items-center"
        >
          <div
            class="bg-blue py-4 sm:py-8 w-full lg:w-1/2 px-4 sm:px-8 text-left lg:flex lg:justify-between flex-col h-full md:h-[460px]"
          >
            <h3 class="mb-8 text-lg font-semibold sm:text-lg">
              {{ item.bio[0].children[0].text }}
            </h3>
            <div class="flex items-center justify-start space-x-4">
              <div>
                <img
                  class="h-8 w-10 rounded-full object-cover sm:h-10 sm:w-10"
                  :src="item.imageUrl.url"
                  alt=""
                />
              </div>
              <div class="w-full">
                <h4 class="mb-0 font-bold">{{ item.nom }}</h4>
                <p class="font-medium text-gray-200">{{ item.entreprise }}</p>
              </div>
            </div>
          </div>

          <div class="hidden lg:block w-full lg:w-1/2">
            <img class="h-[460px] w-full object-cover" :src="item.imageUrl.url" alt="" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
defineProps({
  data_testimonials: Array,
});
</script>
