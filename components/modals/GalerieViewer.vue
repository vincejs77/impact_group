<template>
  <div>
    <TransitionRoot appear :show="isOpenModal_galerie" as="template">
      <Dialog as="div" @close="$emit('closeModal_galerie')" class="relative z-[99999]">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 "
          enter-to="opacity-100 "
          leave="duration-200 ease-in"
          leave-from="opacity-100 "
          leave-to="opacity-0 "
        >
          <div class="fixed inset-0 bg-blue backdrop-blur-md bg-opacity-60" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center lg:justify-center pt-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95 translate-y-24"
              enter-to="opacity-100 scale-100 translate-y-0"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100 translate-y-0"
              leave-to="opacity-0 scale-95 translate-y-24"
            >
              <DialogPanel class="bg-transparent">
                <section class="relative">
                  <div class="mx-auto flex justify-center items-center">
                    <button
                      @click="closeModal_galerie()"
                      class="cursor-pointer rounded-full mb-4 w-10 h-10 p-3 bg-blue z-[99999] -top-20"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        class="w-4 h-4 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="i-wrapper">
                    <div class="i-container">
                      <div
                        class="max-w-3xl mb-16 -mx-4 bg-white rounded-md overflow-hidden"
                      >
                        <div class="px-4 sm:px-8 py-4 sm:py-6">
                          <div>
                            <h2 class="text-xl sm:text-2xl">{{ titre }}</h2>
                            <p class="mt-2">
                              {{ description }}
                            </p>
                          </div>
                          <div class="mt-4">
                            <ul class="flex justify-start items-center flex-wrap -mt-4">
                              <li
                                :key="categorie"
                                v-for="categorie in categories_gallerie"
                                class="mr-3 mt-3 text-xs test__tag bg-blue text-white bg-opacity-80 py-1 px-4 rounded-md"
                              >
                                <span class="font-medium">
                                  {{ categorie.titre }}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="min-w-full relative">
                          <div class="bg-blue bg-opacity-10">
                            <img
                              class="min-w-full lg:min-w-[900px] h-auto sm:h-[500px] min-h-[220px] sm:min-h-[300px] object-cover"
                              :src="imageUrl.url"
                              :alt="titre"
                            />
                          </div>
                          <div
                            v-if="useGlobalStore().$state.lengthData_galerie - 1 > 0"
                            class="flex justify-start pl-4 sm:pl-8 items-center absolute to-transparent w-16 sm:w-24 left-0 top-0 h-full"
                          >
                            <button
                              @click="prevModal_galerie()"
                              class="bg-blue bg-opacity-60 rounded-full p-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                              </svg>
                            </button>
                          </div>

                          <div
                            v-if="useGlobalStore().$state.lengthData_galerie - 1 > 0"
                            class="flex justify-end pr-4 sm:pr-8 items-center absolute to-transparent w-24 right-0 top-0 h-full"
                          >
                            <button
                              @click="nextModal_galerie()"
                              class="bg-blue bg-opacity-60 rounded-full p-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script setup>
import { useGlobalStore } from "~~/store/global";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const props = defineProps({
  isOpenModal_galerie: Boolean,
  closeModal_galerie: {
    type: Function,
  },
  lengthData: Number,
  titre: String,
  description: String,
  imageUrl: {
    type: Object,
    default: function () {
      return {
        url: String,
      };
    },
  },
  categories_gallerie: {
    type: Object,
    default: function () {
      return {
        title: String,
      };
    },
  },
});

const _lengthData = props.lengthData - 1;

const nextModal_galerie = async () => {
  useGlobalStore().$state.isOpenModal_galerie = false;
  setTimeout(_nextModal_galerie, 500);
};

const prevModal_galerie = () => {
  useGlobalStore().$state.isOpenModal_galerie = false;
  setTimeout(_prevModal_galerie, 500);
};
const _prevModal_galerie = () => {
  const currentIndex_galerie = useGlobalStore().$state.currentIndex_galerie;
  if (currentIndex_galerie > 0) {
    useGlobalStore().$state.currentIndex_galerie =
      useGlobalStore().$state.currentIndex_galerie - 1;
    useGlobalStore().$state.isOpenModal_galerie = true;
  } else {
    useGlobalStore().$state.currentIndex_galerie =
      useGlobalStore().$state.lengthData_galerie - 1;
    useGlobalStore().$state.isOpenModal_galerie = true;
  }
  useGlobalStore().$state.isOpenModal_galerie = true;
};

const _nextModal_galerie = () => {
  const currentIndex_galerie = useGlobalStore().$state.currentIndex_galerie;
  if (currentIndex_galerie < useGlobalStore().$state.lengthData_galerie - 1) {
    useGlobalStore().$state.currentIndex_galerie =
      useGlobalStore().$state.currentIndex_galerie + 1;
    useGlobalStore().$state.isOpenModal_galerie = true;
  } else {
    useGlobalStore().$state.currentIndex_galerie = 0;
    useGlobalStore().$state.isOpenModal_galerie = true;
  }
};
</script>
