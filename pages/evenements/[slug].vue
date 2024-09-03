<template>
  <div class="overflow-hidden">
    <section class="i-wrapper sm:py-2 bg-blue bg-opacity-5 border-b border-b-gray-100">
      <div class="i-container relative mx-auto text-sm">
        <div class="mb-0">
          <div class="flex items-center py-4 overflow-x-auto whitespace-nowrap">
            <NuxtLink to="/" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
            </NuxtLink>

            <span class="mx-2 text-gray-400 rtl:-scale-x-100">
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

            <NuxtLink to="/evenements" class="hover:underline"> Évènements </NuxtLink>

            <span class="mx-2 text-gray-400 rtl:-scale-x-100">
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

            <NuxtLink
              :to="
                '/evenements/' +
                data_single_evenement[0]?.slug.current +
                '#' +
                data_single_evenement[0]?._id
              "
              class="hover:underline"
            >
              <p class="max-w-[100px] sm:max-w-[150px] truncate">
                {{ data_single_evenement[0]?.titre }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="i-wrapper">
      <div class="i-container">
        <div class="flex justify-between flex-col lg:flex-row py-8 lg:py-16">
          <div class="text-left lg:max-w-md lg:min-h-full flex flex-col justify-between">
            <div>
              <div class="flex justify-start space-x-3">
                <ul>
                  <li
                    v-if="data_single_evenement[0]?.status == 'a_venir'"
                    class="mr-3 bg-green-500 text-white font-semibold inline-block mb-3 px-2.5 py-1 text-xs uppercase rounded-md"
                  >
                    À venir
                  </li>

                  <li
                    v-else
                    class="mr-3 bg-opacity-70 bg-blue text-white font-semibold inline-block mb-3 px-2.5 py-1 text-xs uppercase rounded-md"
                  >
                    Passé
                  </li>
                  <li
                    :key="categorie"
                    v-for="categorie in data_single_evenement[0]?.categories_evenements"
                    class="font-semibold inline-block mb-3 mr-3 px-2.5 py-1 text-xs text-blue_1 bg-blue_1 bg-opacity-10 uppercase rounded-md"
                  >
                    {{ categorie.titre }}
                  </li>
                </ul>
              </div>
              <h1 class="text-3xl sm:text-4xl">{{ data_single_evenement[0]?.titre }}</h1>
              <div class="mt-8">
                <p>
                  {{ data_single_evenement[0].description }}
                </p>
              </div>
            </div>
            <div class="bg-blue bg-opacity-[0.05] rounded-xl px-4 w-full mt-8">
              <ul class="w-full divide-y divide-gray-300 text-sm">
                <li class="w-full py-4 flex justify-start items-center">
                  <div class="w-[30px]">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="w-full">
                    <span class="text-gray-600"
                      >Du
                      {{
                        $convertDate__index(data_single_evenement[0].startedAt, "d", "fr")
                      }}
                      au
                      {{
                        $convertDate__index(data_single_evenement[0].endedAt, "", "fr")
                      }}</span
                    >
                  </div>
                </li>
                <li class="py-4 flex justify-start items-center">
                  <div class="w-[30px]">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="w-full">
                    <span class="text-gray-600">
                      {{ data_single_evenement[0].lieu }}
                    </span>
                  </div>
                </li>

                <li
                  v-if="data_single_evenement[0]?.status == 'a_venir'"
                  class="py-4 flex justify-start items-center"
                >
                  <div class="w-[30px]">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="w-full">
                    <button class="cursor-pointer" @click="openModal()">
                      <span class="i-underline-animation--txt font-semibold text-primary">
                        S'inscrire en ligne
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-8 lg:mt-0 w-full lg:w-[400px] rounded-xl overflow-hidden">
            <img
              class="w-full h-full"
              :src="data_single_evenement[0].imageUrl.url"
              alt=""
            />
          </div>
        </div>

        <div class="w-full h-[1px] bg-gray-300"></div>
      </div>
    </section>

    <section class="i-wrapper">
      <div class="i-container py-8 sm:py-12 pb-16">
        <div class="relative max-w-2xl mx-auto">
          <div class="i-content-formater">
            <div v-html="$portable_txt_to_html(data_single_evenement[0]?.body)"></div>
          </div>

          <div class="mt-12">
            <ul class="flex justify-start flex-wrap -mt-4">
              <li
                :key="tag"
                v-for="tag in data_single_evenement[0]?.tags"
                class="rounded-md px-3 py-1 mr-4 mt-4 bg-blue_1 bg-opacity-10 text-blue_1 text-sm font-semibold"
              >
                <span> #{{ tag.label }} </span>
              </li>
            </ul>
          </div>
          <div class="mt-8">
            <ul
              class="mt-4 flex justify-start flex-row space-x-3 lg:space-x-4 text-gray-400"
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5 lg:w-6 lg:h-6 text-primary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </li>
              <li>
                <div class="lg:mx-0 font-medium">Partager</div>
              </li>
              <li class="hover:text-primary transition-all duration-500">
                <button @click="shareTW()">
                  <svg
                    class="w-6"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.19 9.73001C4.93 9.73001 4.67004 9.73001 4.42004 9.73001C4.34004 9.69001 4.25004 9.69997 4.17004 9.68997C3.12004 9.53997 2.21001 9.10013 1.45001 8.35013C0.680012 7.60013 0.220049 6.67966 0.0500488 5.61966C0.0300488 5.50966 0.04 5.39984 0 5.29984C0 5.03984 0 4.7698 0 4.5098C0.04 4.4098 0.0300488 4.29974 0.0500488 4.19974C0.290049 2.69974 1.05005 1.53005 2.36005 0.770051C3.96005 -0.159949 5.62004 -0.180222 7.23004 0.739778C8.76004 1.61978 9.56001 3.00005 9.64001 4.77005C9.69001 5.87005 9.37002 6.8798 8.71002 7.7598C7.91002 8.8298 6.85003 9.46972 5.53003 9.67972C5.41003 9.68972 5.3 9.69001 5.19 9.73001ZM7.90002 2.98978C7.69002 3.06978 7.48001 3.13993 7.26001 3.14993C7.50001 2.97993 7.67002 2.75999 7.77002 2.45999C7.53002 2.59999 7.3 2.69003 7.06 2.75003C7 2.77003 6.95002 2.75999 6.90002 2.70999C6.35002 2.18999 5.45 2.26991 5 2.87991C4.79 3.16991 4.71001 3.49013 4.76001 3.85013C4.77001 3.93013 4.75999 3.93972 4.67999 3.92972C4.57999 3.90972 4.49001 3.90993 4.39001 3.89993C3.57001 3.75993 2.87005 3.40007 2.30005 2.79007C2.24005 2.73007 2.19 2.67013 2.13 2.60013C1.99 2.83013 1.94002 3.07011 1.96002 3.33011C1.99002 3.73011 2.17001 4.03984 2.51001 4.29984C2.32001 4.29984 2.17002 4.25997 2.02002 4.18997C1.95002 4.15997 1.94001 4.16978 1.95001 4.23978C1.98001 4.60978 2.13003 4.90993 2.41003 5.14993C2.56003 5.27993 2.74001 5.35995 2.95001 5.41995C2.76001 5.47995 2.58001 5.46974 2.39001 5.44974C2.61001 5.99974 3.00002 6.27988 3.58002 6.33988C3.03002 6.75988 2.40999 6.91991 1.73999 6.87991C1.76999 6.90991 1.80002 6.91997 1.83002 6.93997C2.34002 7.22997 2.88002 7.39972 3.46002 7.42972C4.15002 7.46972 4.82004 7.35003 5.42004 7.00003C6.68004 6.27003 7.28 5.15976 7.31 3.71976C7.31 3.64976 7.33001 3.60986 7.39001 3.56986C7.60001 3.40986 7.78004 3.23003 7.92004 3.00003L7.92999 2.98978C7.90999 2.97978 7.91002 2.98978 7.90002 2.98978Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </li>
              <li class="hover:text-primary transition-all duration-500">
                <button @click="shareFB()">
                  <svg
                    class="w-6"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.63019 0.179688C4.88019 0.179688 5.13019 0.179688 5.38019 0.179688C5.39019 0.199687 5.41018 0.199707 5.43018 0.199707C6.16018 0.259707 6.84021 0.479863 7.47021 0.859863C8.76021 1.64986 9.5302 2.79004 9.7702 4.29004C9.7902 4.40004 9.78019 4.51988 9.82019 4.62988C9.82019 4.88988 9.82019 5.1399 9.82019 5.3999C9.78019 5.4799 9.79021 5.5699 9.78021 5.6499C9.62021 6.7299 9.1702 7.65969 8.3902 8.42969C7.6702 9.13969 6.82019 9.57977 5.82019 9.75977C5.76019 9.76977 5.75018 9.75971 5.75018 9.69971C5.75018 8.62971 5.75018 7.54998 5.75018 6.47998C5.75018 6.41998 5.7702 6.3999 5.8302 6.3999C6.1402 6.3999 6.45018 6.3999 6.75018 6.3999C6.88018 6.3999 6.88021 6.40002 6.90021 6.27002C6.96021 5.88002 7.0102 5.4901 7.0802 5.1001C7.1002 5.0101 7.07017 5 6.99017 5C6.60017 5 6.2202 5 5.8302 5C5.7802 5 5.75018 4.99969 5.75018 4.92969C5.75018 4.63969 5.75018 4.35006 5.75018 4.06006C5.76018 3.64006 5.9802 3.4001 6.3902 3.3501C6.6202 3.3201 6.84019 3.33984 7.07019 3.33984C7.12019 3.33984 7.15021 3.34002 7.15021 3.27002C7.15021 2.92002 7.15021 2.56973 7.15021 2.21973C7.15021 2.16973 7.1302 2.14965 7.0802 2.13965C6.6302 2.07965 6.18022 2.02008 5.73022 2.08008C5.32022 2.13008 4.95023 2.28986 4.67023 2.60986C4.37023 2.94986 4.25017 3.37006 4.24017 3.81006C4.23017 4.17006 4.24017 4.5399 4.24017 4.8999C4.24017 4.9699 4.23021 4.98975 4.15021 4.98975C3.80021 4.98975 3.45022 4.98975 3.10022 4.98975C3.04022 4.98975 3.01019 4.99982 3.01019 5.06982C3.01019 5.47982 3.01019 5.8898 3.01019 6.2998C3.01019 6.3698 3.03021 6.37988 3.09021 6.37988C3.44021 6.37988 3.78019 6.37988 4.13019 6.37988C4.21019 6.37988 4.24017 6.39975 4.24017 6.48975C4.24017 7.53975 4.24017 8.5999 4.24017 9.6499C4.24017 9.6799 4.24017 9.70975 4.24017 9.73975C4.23017 9.73975 4.22021 9.74975 4.22021 9.73975C4.15021 9.72975 4.08019 9.71971 4.01019 9.69971C3.11019 9.50971 2.33023 9.09996 1.67023 8.45996C0.910227 7.72996 0.440183 6.8398 0.250183 5.7998C0.220183 5.6598 0.230176 5.50963 0.180176 5.36963C0.180176 5.10963 0.180176 4.84008 0.180176 4.58008C0.200176 4.57008 0.200195 4.54979 0.200195 4.52979C0.220195 4.35979 0.240203 4.20004 0.270203 4.04004C0.650203 2.06004 2.29022 0.499961 4.29022 0.209961C4.40022 0.219961 4.52019 0.219687 4.63019 0.179688Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </li>
              <li class="hover:text-primary transition-all duration-500">
                <button @click="shareWP()">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>

          <div class="mt-12 text-sm">
            <div class="-mt-4 flex justify-start flex-wrap">
              <div class="mr-4 mt-4" v-if="data_single_evenement[0]?.status == 'a_venir'">
                <button
                  v-if="data_single_evenement[0]?.status == 'a_venir'"
                  class="i-btn i-btn__primary"
                  @click="openModal()"
                >
                  <span>S'inscrire</span>
                </button>
              </div>
              <div class="mt-4">
                <NuxtLink to="/evenements" class="w-auto i-btn i-btn__blue_1">
                  <span>Plus d'évènements</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TransitionRoot
      v-if="data_single_evenement[0]?.status == 'a_venir'"
      appear
      :show="isOpen"
      as="template"
    >
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full pt-[80px] lg:pt-[95px] items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="relative w-full max-w-md transform overflow-hidden rounded-md bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg pt-6 text-center lg:text-xl font-bold leading-6 text-gray-900"
                >
                  Inscription :
                  <span class="text-blue">{{ data_single_evenement[0]?.titre }}</span>
                </DialogTitle>

                <div
                  @click="closeModal()"
                  class="cursor-pointer absolute left-0 top-0 bg-blue_1 p-2 rounded-br-md text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    class="size-6 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div class="mt-4">
                  <FeaturesReservation :event_titre="data_single_evenement[0]?.titre" />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
const { $convertDate__index } = useNuxtApp();
const { $portable_txt_to_html } = useNuxtApp();
const route = useRoute();
const sanity = useSanity();

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const query = ref(
  groq`*[_type == "evenements" && slug.current=="${route.params.slug}" && visibility == 'visible']{
    _id,status,mode,slug,titre,description,publishedAt,_updatedAt,startedAt,endedAt,lieu,lien,
  "imageUrl":image.asset->,categories_evenements[]->{titre},
  body[]{
    ...,
    _type == "image" => {
      ...,
      "imageUrl":asset->
    }
  },
  tags[]{value,label}
  }
  `
);

const [{ data: data_single_evenement }] = await Promise.all([
  useAsyncData("data-single-evenements", () => sanity.fetch(query.value)),
]);

const navUrl_fb = ref("");
const navUrl_tw = ref("");
const navUrl_wp = ref("");
const navUrl_em = ref("");

const copied = ref(false);

const copyFx = () => {
  copied.value = true;
  navigator.clipboard.writeText("https://www.impactgp.net" + route.fullPath);
};

onBeforeMount(() => {
  navUrl_fb.value =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    "https://www.impactgp.net/evenements/" +
    data_single_evenement.value[0]?.slug.current +
    "&quote=" +
    "Évènement" +
    " par Impact Group : « " +
    data_single_evenement.value[0]?.titre +
    " » ";
  navUrl_tw.value =
    "https://twitter.com/intent/tweet?text=" +
    "Évènement" +
    " par Impact Group : « " +
    data_single_evenement.value[0]?.titre +
    " »" +
    " " +
    "https://www.impactgp.net/evenements/" +
    data_single_evenement.value[0]?.slug.current;
  navUrl_wp.value =
    "whatsapp://send?text=" +
    "Évènement" +
    " par Impact Group : « " +
    data_single_evenement.value[0]?.titre +
    " »" +
    " " +
    "https://www.impactgp.net/evenements/" +
    data_single_evenement.value[0]?.slug.current;

  navUrl_em.value =
    "mailto:?subject=" +
    data_single_evenement.value[0]?.titre +
    ";body=" +
    "Évènement" +
    "par Impact Group « " +
    " »" +
    " " +
    "https://www.impactgp.net/evenements/" +
    data_single_evenement.value[0]?.slug.current;
});

const shareFB = () => {
  window.open(navUrl_fb.value, "_blank", "left=100,top=100,width=520,height=500");
};

const shareTW = () => {
  window.open(navUrl_tw.value, "_blank", "left=100,top=100,width=520,height=500");
};

const shareWP = () => {
  window.open(navUrl_wp.value, "_blank", "left=100,top=100,width=520,height=500");
};

const shareEm = () => {
  window.open(navUrl_em, "_blank", "left=100,top=100,width=520,height=500");
};

const title = `${data_single_evenement.value[0]?.titre} - Un évènement par Impact Group`;
useHead({
  title,
  meta: [
    { property: "og:title", content: title },
    { property: "og:type", content: "Évènement" },
    { property: "og:locale", content: "en" },
    { property: "og:site_name", content: "Impact Group" },
    { property: "og:image:alt", content: title },
    {
      property: "og:description",
      content: data_single_evenement.value[0]?.description,
    },
    {
      property: "og:url",
      content: "https://www.impactgp.net/",
    },
    {
      property: "og:image",
      content: data_single_evenement.value[0]?.imageUrl.url,
    },
    { name: "twitter:title", content: title },
    { name: "twitter:site", content: "@rdc_impact" },
    { name: "twitter:image:alt", content: title },
    { name: "twitter:creator", content: "@rdc_impact" },
    {
      name: "twitter:description",
      content: data_single_evenement.value[0]?.description,
    },
    {
      name: "twitter:image",
      content: data_single_evenement.value[0]?.imageUrl.url,
    },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>
