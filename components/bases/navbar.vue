<template>
  <nav
    class="navbar text-blue fixed w-full left-0 right-0 top-0 bg-white z-50 bg-opacity-80 backdrop-blur-sm"
    id="navbar"
  >
    <div class="i-wrapper border-b border-b-gray-300">
      <div class="i-container py-4 sm:py-4 flex justify-between items-center">
        <NuxtLink
          to="/"
          :active-class="'none-route-active-class'"
          class="i-logo font-bold sm:text-lg text-xl flex justify-start items-center space-x-4"
        >
          <img
            class="w-6 sm:w-8"
            src="/img/brand/impact_group_logo.svg"
            alt="Impact Group"
          />
          <span class="i-logo--name">Impact Group</span>
        </NuxtLink>
        <div class="hidden lg:flex justify-end items-center space-x-8">
          <ul class="i-menu i-menu__ul flex justify-end items-center space-x-4">
            <li>
              <NuxtLink to="/" class="i-underline-animation--txt">Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/a-propos" class="i-underline-animation--txt"
                >A propos</NuxtLink
              >
            </li>
            <li class="hidden">
              <NuxtLink to="/services" class="i-underline-animation--txt"
                >Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/galerie" class="i-underline-animation--txt"
                >Galerie</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/blog" class="i-underline-animation--txt">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/evenements" class="i-underline-animation--txt"
                >Évènements</NuxtLink
              >
            </li>
          </ul>
          <div>
            <NuxtLink to="/nous-contacter" class="i-btn i-btn__primary">
              <span class="text-white">Nous contacter</span>
            </NuxtLink>
          </div>
        </div>
        <div class="flex lg:hidden">
          <div
            v-show="!useGlobalStore().$state.isOpenModal_rm"
            @click="open_menu()"
            class="i-button i-button__white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>

          <div
            v-show="useGlobalStore().$state.isOpenModal_rm"
            @click="close_menu()"
            class="i-button i-button__white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <!-- START RESPONSIVE MENU -->
        <TransitionRoot as="template" :show="useGlobalStore().$state.isOpenModal_rm">
          <Dialog
            as="div"
            class="i-menu-responsive relative z-40 block lg:hidden"
            @close="useGlobalStore().$state.isOpenModal_rm = false"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in duration-200"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div
                class="fixed inset-0 top-0 w-full h-full bg-white bg-opacity-80 backdrop-blur-sm transition-opacity"
              />
            </TransitionChild>

            <div class="top-[60px] w-full fixed inset-0 z-10 overflow-y-auto">
              <div class="w-full flex min-h-full items-start text-center">
                <TransitionChild
                  focus
                  as="template"
                  enter="ease-out duration-300"
                  enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enter-to="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leave-from="opacity-100 translate-y-0 sm:scale-100"
                  leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel
                    class="w-full min-w-full relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg"
                  >
                    <div class="w-full min-w-full bg-white px-4 pb-6 pt-6">
                      <div
                        class="sm:px-4 divide-y-2 divide-gray-100 w-full flex flex-col justify-start items-start font-semibold"
                      >
                        <NuxtLink
                          @click="close_menu()"
                          class="pb-4 i-link min-w-full"
                          to="/"
                        >
                          <span class="w-full">Accueil</span>
                        </NuxtLink>
                        <NuxtLink
                          @click="close_menu()"
                          class="py-4 i-link min-w-full"
                          to="/a-propos"
                        >
                          <span>À Propos</span>
                        </NuxtLink>
                        <NuxtLink
                          @click="close_menu()"
                          class="py-4 i-link min-w-full"
                          to="/galerie"
                        >
                          <span>Galerie</span>
                        </NuxtLink>

                        <NuxtLink
                          @click="close_menu()"
                          class="py-4 i-link w-full"
                          to="/blog"
                        >
                          <span>Blog</span>
                        </NuxtLink>
                        <NuxtLink
                          @click="close_menu()"
                          class="py-4 i-link w-full"
                          to="/evenements"
                        >
                          <span>Évènements</span>
                        </NuxtLink>
                      </div>
                    </div>
                    <div class="bg-blue bg-opacity-10 sm:px-8 py-6 w-full px-4">
                      <ul
                        class="flex flex-row justify-between items-center space-x-6 font-medium"
                      >
                        <li>
                          <NuxtLink
                            :active-class="'underline font-semibold'"
                            to="/nous-contacter"
                            @click="close_menu()"
                            class="bg-none flex justify-start items-center space-x-2"
                          >
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                class="w-6 h-6 text-primary"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                              </svg>
                            </div>
                            <div>
                              <span>Nous contacter</span>
                            </div>
                          </NuxtLink>
                        </li>
                        <div>
                          <ul class="flex justify-end space-x-4 mt-0">
                            <li>
                              <a
                                href="https://twitter.com/rdc_impact"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.19 9.73001C4.93 9.73001 4.67004 9.73001 4.42004 9.73001C4.34004 9.69001 4.25004 9.69997 4.17004 9.68997C3.12004 9.53997 2.21001 9.10013 1.45001 8.35013C0.680012 7.60013 0.220049 6.67966 0.0500488 5.61966C0.0300488 5.50966 0.04 5.39984 0 5.29984C0 5.03984 0 4.7698 0 4.5098C0.04 4.4098 0.0300488 4.29974 0.0500488 4.19974C0.290049 2.69974 1.05005 1.53005 2.36005 0.770051C3.96005 -0.159949 5.62004 -0.180222 7.23004 0.739778C8.76004 1.61978 9.56001 3.00005 9.64001 4.77005C9.69001 5.87005 9.37002 6.8798 8.71002 7.7598C7.91002 8.8298 6.85003 9.46972 5.53003 9.67972C5.41003 9.68972 5.3 9.69001 5.19 9.73001ZM7.90002 2.98978C7.69002 3.06978 7.48001 3.13993 7.26001 3.14993C7.50001 2.97993 7.67002 2.75999 7.77002 2.45999C7.53002 2.59999 7.3 2.69003 7.06 2.75003C7 2.77003 6.95002 2.75999 6.90002 2.70999C6.35002 2.18999 5.45 2.26991 5 2.87991C4.79 3.16991 4.71001 3.49013 4.76001 3.85013C4.77001 3.93013 4.75999 3.93972 4.67999 3.92972C4.57999 3.90972 4.49001 3.90993 4.39001 3.89993C3.57001 3.75993 2.87005 3.40007 2.30005 2.79007C2.24005 2.73007 2.19 2.67013 2.13 2.60013C1.99 2.83013 1.94002 3.07011 1.96002 3.33011C1.99002 3.73011 2.17001 4.03984 2.51001 4.29984C2.32001 4.29984 2.17002 4.25997 2.02002 4.18997C1.95002 4.15997 1.94001 4.16978 1.95001 4.23978C1.98001 4.60978 2.13003 4.90993 2.41003 5.14993C2.56003 5.27993 2.74001 5.35995 2.95001 5.41995C2.76001 5.47995 2.58001 5.46974 2.39001 5.44974C2.61001 5.99974 3.00002 6.27988 3.58002 6.33988C3.03002 6.75988 2.40999 6.91991 1.73999 6.87991C1.76999 6.90991 1.80002 6.91997 1.83002 6.93997C2.34002 7.22997 2.88002 7.39972 3.46002 7.42972C4.15002 7.46972 4.82004 7.35003 5.42004 7.00003C6.68004 6.27003 7.28 5.15976 7.31 3.71976C7.31 3.64976 7.33001 3.60986 7.39001 3.56986C7.60001 3.40986 7.78004 3.23003 7.92004 3.00003L7.92999 2.98978C7.90999 2.97978 7.91002 2.98978 7.90002 2.98978Z"
                                    fill="#f15a29"
                                  />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/profile.php?id=100090124662161"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.63019 0.179688C4.88019 0.179688 5.13019 0.179688 5.38019 0.179688C5.39019 0.199687 5.41018 0.199707 5.43018 0.199707C6.16018 0.259707 6.84021 0.479863 7.47021 0.859863C8.76021 1.64986 9.5302 2.79004 9.7702 4.29004C9.7902 4.40004 9.78019 4.51988 9.82019 4.62988C9.82019 4.88988 9.82019 5.1399 9.82019 5.3999C9.78019 5.4799 9.79021 5.5699 9.78021 5.6499C9.62021 6.7299 9.1702 7.65969 8.3902 8.42969C7.6702 9.13969 6.82019 9.57977 5.82019 9.75977C5.76019 9.76977 5.75018 9.75971 5.75018 9.69971C5.75018 8.62971 5.75018 7.54998 5.75018 6.47998C5.75018 6.41998 5.7702 6.3999 5.8302 6.3999C6.1402 6.3999 6.45018 6.3999 6.75018 6.3999C6.88018 6.3999 6.88021 6.40002 6.90021 6.27002C6.96021 5.88002 7.0102 5.4901 7.0802 5.1001C7.1002 5.0101 7.07017 5 6.99017 5C6.60017 5 6.2202 5 5.8302 5C5.7802 5 5.75018 4.99969 5.75018 4.92969C5.75018 4.63969 5.75018 4.35006 5.75018 4.06006C5.76018 3.64006 5.9802 3.4001 6.3902 3.3501C6.6202 3.3201 6.84019 3.33984 7.07019 3.33984C7.12019 3.33984 7.15021 3.34002 7.15021 3.27002C7.15021 2.92002 7.15021 2.56973 7.15021 2.21973C7.15021 2.16973 7.1302 2.14965 7.0802 2.13965C6.6302 2.07965 6.18022 2.02008 5.73022 2.08008C5.32022 2.13008 4.95023 2.28986 4.67023 2.60986C4.37023 2.94986 4.25017 3.37006 4.24017 3.81006C4.23017 4.17006 4.24017 4.5399 4.24017 4.8999C4.24017 4.9699 4.23021 4.98975 4.15021 4.98975C3.80021 4.98975 3.45022 4.98975 3.10022 4.98975C3.04022 4.98975 3.01019 4.99982 3.01019 5.06982C3.01019 5.47982 3.01019 5.8898 3.01019 6.2998C3.01019 6.3698 3.03021 6.37988 3.09021 6.37988C3.44021 6.37988 3.78019 6.37988 4.13019 6.37988C4.21019 6.37988 4.24017 6.39975 4.24017 6.48975C4.24017 7.53975 4.24017 8.5999 4.24017 9.6499C4.24017 9.6799 4.24017 9.70975 4.24017 9.73975C4.23017 9.73975 4.22021 9.74975 4.22021 9.73975C4.15021 9.72975 4.08019 9.71971 4.01019 9.69971C3.11019 9.50971 2.33023 9.09996 1.67023 8.45996C0.910227 7.72996 0.440183 6.8398 0.250183 5.7998C0.220183 5.6598 0.230176 5.50963 0.180176 5.36963C0.180176 5.10963 0.180176 4.84008 0.180176 4.58008C0.200176 4.57008 0.200195 4.54979 0.200195 4.52979C0.220195 4.35979 0.240203 4.20004 0.270203 4.04004C0.650203 2.06004 2.29022 0.499961 4.29022 0.209961C4.40022 0.219961 4.52019 0.219687 4.63019 0.179688Z"
                                    fill="#f15a29"
                                  />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://instagram.com/impact.rdc"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  width="22"
                                  height="20"
                                  viewBox="0 0 11 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.350098 4.83011C0.350098 2.16011 2.52007 -0.00996558 5.20007 3.44227e-05C7.88007 3.44227e-05 10.0401 2.18013 10.0401 4.85013C10.0301 7.52013 7.86006 9.67972 5.19006 9.67972C2.51006 9.67972 0.350098 7.51011 0.350098 4.83011ZM2.21008 4.83988C2.20008 4.83988 2.20008 4.83988 2.21008 4.83988C2.20008 5.20988 2.20007 5.57998 2.20007 5.93998C2.20007 6.07998 2.2101 6.22013 2.2301 6.35013C2.3201 6.92013 2.59008 7.36966 3.14008 7.61966C3.41008 7.73966 3.71007 7.79984 4.01007 7.79984C4.77007 7.79984 5.52009 7.79984 6.28009 7.79984C6.44009 7.79984 6.61008 7.7898 6.77008 7.7598C7.38008 7.6598 7.83006 7.35003 8.06006 6.75003C8.15006 6.51003 8.19006 6.24978 8.19006 5.98978C8.19006 5.23978 8.19006 4.48978 8.19006 3.73978C8.19006 3.59978 8.1801 3.45986 8.1601 3.31986C8.0601 2.70986 7.7601 2.2498 7.1601 2.0098C6.9201 1.9198 6.66009 1.86966 6.40009 1.86966C5.60009 1.86966 4.79005 1.85966 3.99005 1.86966C3.66005 1.86966 3.34011 1.93988 3.05011 2.08988C2.50011 2.38988 2.26009 2.88001 2.22009 3.48001C2.19009 3.94001 2.21008 4.38988 2.21008 4.83988Z"
                                    fill="#f15a29"
                                  />
                                  <path
                                    d="M5.19005 2.43994C5.59005 2.43994 5.98005 2.43994 6.38005 2.43994C6.51005 2.43994 6.64006 2.45998 6.76006 2.47998C7.24006 2.58998 7.5501 2.93969 7.6101 3.42969C7.6201 3.53969 7.63005 3.64977 7.63005 3.75977C7.63005 4.49977 7.64006 5.22973 7.63005 5.96973C7.63005 6.14973 7.60009 6.33977 7.54009 6.50977C7.39009 6.94977 7.06009 7.18996 6.60009 7.20996C6.04009 7.23996 5.47008 7.23975 4.91008 7.23975C4.54008 7.23975 4.16009 7.23996 3.79009 7.20996C3.22009 7.16996 2.84007 6.77996 2.77007 6.20996C2.76007 6.10996 2.75005 6.00967 2.75005 5.90967C2.75005 5.15967 2.74005 4.41992 2.75005 3.66992C2.75005 3.49992 2.78008 3.3099 2.84008 3.1499C2.99008 2.7099 3.32008 2.47994 3.78008 2.43994C4.17008 2.40994 4.57007 2.41967 4.96007 2.40967C5.04007 2.42967 5.11005 2.42994 5.19005 2.43994ZM5.19005 3.27002C4.31005 3.27002 3.61005 3.9801 3.62005 4.8501C3.62005 5.7201 4.33007 6.40967 5.21007 6.40967C6.07007 6.40967 6.77007 5.70984 6.77007 4.83984C6.76007 3.96984 6.06005 3.26002 5.19005 3.27002ZM6.77007 3.58984C6.94007 3.58984 7.08007 3.44979 7.08007 3.27979C7.08007 3.10979 6.94007 2.96996 6.77007 2.95996C6.59007 2.95996 6.45006 3.09979 6.45006 3.27979C6.46006 3.44979 6.60007 3.58984 6.77007 3.58984Z"
                                    fill="#f15a29"
                                  />
                                  <path
                                    d="M4.16992 4.8501C4.16992 4.2901 4.61987 3.83008 5.17987 3.83008C5.73987 3.83008 6.19989 4.27984 6.19989 4.83984C6.19989 5.39984 5.74988 5.85986 5.18988 5.85986C4.62988 5.85986 4.17992 5.4101 4.16992 4.8501Z"
                                    fill="#f15a29"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </ul>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>

        <!-- END RESPONSIVE MENU -->
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useGlobalStore } from "~/store/global";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
} from "@headlessui/vue";

import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const open_menu = () => {
  useGlobalStore().$state.isOpenModal_rm = true;
};

const close_menu = () => {
  useGlobalStore().$state.isOpenModal_rm = false;
};

function handleScroll() {
  useGlobalStore().$state.scrollPosition = window.scrollY;
  scrollPosition.value = useGlobalStore().$state.scrollPosition;
}

const about_us_menu = [
  {
    name: "Ipas DRC",
    href: "/about",
  },
  {
    name: "Meet out community",
    href: "/meet-out-community",
  },
];
</script>
