<template>
  <div class="cursor-grab">
    <carousel
      class="-my-3"
      ref="carousel_testimonials"
      :key="slider"
      :autoplay="5000"
      :breakpoints="breakpoints_carousel"
      :pauseAutoplayOnHover="true"
      :wrap-around="true"
      v-model="slider"
    >
      <slide class="w-full h-full" :key="item" v-for="item in data_testimonials">
        <div class="text-left">
          <h3 class="mb-8 text-lg sm:text-lg font-semibold">
            {{ item.bio[0].children[0].text }}
          </h3>
          <div class="flex justify-start items-center space-x-4">
            <div>
              <img
                class="w-10 h-10 sm:w-10 sm:h-10 rounded-full object-cover"
                :src="item.imageUrl.url"
                alt=""
              />
            </div>
            <div>
              <h4 class="mb-0 font-bold">{{ item.nom }}</h4>
              <p class="text-gray-600 font-medium">{{ item.entreprise }}</p>
            </div>
          </div>
        </div>
      </slide>
      <template #addons>
        <div class="flex justify-between items-center w-full mt-4">
          <div class="flex justify-left item-center w-full">
            <pagination />
          </div>

          <div class="flex justify-end space-x-2">
            <button
              @click="prevCarousel()"
              class="flex justify-center items-center focus:bg-blue focus:text-white bg-gray-200 lg:bg-white w-8 h-8 p-2 rounded-full"
            >
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
            </button>

            <button
              @click="nextCarousel()"
              class="flex justify-center items-center focus:bg-blue focus:text-white bg-gray-200 lg:bg-white w-8 h-8 p-2 rounded-full"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </template>
    </carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

defineProps({
  data_testimonials: Array,
});

const slider = ref(null);

const breakpoints_carousel = {
  0: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  600: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 1,
    snapAlign: "center",
  },
};
const carousel_testimonials = ref(null);

const nextCarousel = () => {
  carousel_testimonials.value.next();
};

const prevCarousel = () => {
  carousel_testimonials.value.prev();
};
</script>

<style>
.carousel__pagination-button::after {
  overflow: hidden;
  border-radius: 10px !important;
  -webkit-border-radius: 10px !important;
  -moz-border-radius: 10px !important;
  -ms-border-radius: 10px !important;
  -o-border-radius: 10px !important;
  width: 14px !important;
}
</style>
