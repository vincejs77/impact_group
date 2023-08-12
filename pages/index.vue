<template>
  <div class="index-page" id="index-page">
    <section
      class="relative i-wrapper bg-cover bg-[center_left_-8rem] sm:bg-[center_left_20rem] bg-no-repeat bg-[url(/img/bg/5.jpg)]"
    >
      <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-[#ffffff]"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#ffffff]"
      ></div>
      <div class="relative z-10 i-container py-16 sm:py-24">
        <div class="i-hero i-hero__v1">
          <div class="i-hero--text max-w-md">
            <h1
              class="leading-[1.2] font-black text-3xl sm:text-5xl sm:leading-[1.2] text-blue"
            >
              La meilleur façon de prédire l' avenir
              <span class="text-blue opacity-80"> est de le créer</span>
            </h1>
            <p class="mt-8 text-gray-700 text-base">
              Impact Group vous accompagne dans la création d’entreprise en RDC et
              ailleurs, pour réussir.
            </p>
            <div
              class="sm:flex sm:justify-start mt-8 space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <div>
                <NuxtLink to="/a-propos" class="w-auto i-btn i-btn__blue_1">
                  <span>À propos de nous</span>
                </NuxtLink>
              </div>
              <div>
                <NuxtLink to="/nous-contacter" class="i-btn i-btn__primary">
                  <span>Nous contacter</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="i-wrapper">
      <div class="w-full md:w-2/2 md:flex justify-between">
        <div
          class="level-counter w-full md:w-1/2 flex lg:justify-end py-10 px-4 sm:px-8 md:px-8 lg:p-16 bg-blue text-white"
        >
          <div class="max-w-[380px] sm:max-w-[420px] sm:py-8">
            <p class="text-xs text-primary font-bold uppercase">Notre impact</p>
            <h2 class="mb-6 text-3xl sm:text-4xl mt-4">Nous façonnons l'avenir</h2>
            <p class="text-lg">
              Nous sommes déterminés à soutenir les jeunes entrepreneurs et promouvoir la
              paix et la croissance économique en RDC.
            </p>

            <div class="flex justify-between sm:justify-start mt-8">
              <div>
                <div class="sm:w-32">
                  <h2
                    class="mb-3 text-3xl md:text-4xl font-bold font-heading tracking-px-n leading-tight"
                  >
                    <span class="js-count-up" data-value="52"></span>
                    <span class="text-primary">+</span>
                  </h2>
                  <p class="text-sm text-gray-300 font-medium leading-normal">
                    entreprises accompagnées
                  </p>
                </div>
              </div>
              <div class="min-h-full w-[1px] bg-gray-300 bg-opacity-30 mr-4"></div>
              <div>
                <div class="sm:w-44">
                  <h2
                    class="font-extrabold font-serif mb-3 text-3xl md:text-4xl font-heading tracking-px-n leading-tight"
                  >
                    <span class="js-count-up" data-value="1000"></span>
                    <span class="text-primary">+</span>
                  </h2>
                  <p class="w-32 text-sm text-gray-300 font-medium leading-normal">
                    jeunes entrepreneurs unis
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-12">
              <NuxtLink to="/a-propos" class="i-btn i-btn__blue_1">
                <span>En savoir plus</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="w-full md:w-1/2 z-0 flex justify-start px-4 py-32 md:p-16 bg-center bg-cover bg-[url(/img/bg/6.jpg)]"
        ></div>
      </div>
    </section>

    <section class="i-wrapper">
      <div class="i-container py-16 sm:py-24">
        <div class="flex justify-between flex-col lg:flex-row lg:space-x-12">
          <div
            class="max-w-md md:max-w-full mx-auto md:mx-0 w-full lg:w-1/3 text-center md:text-left"
          >
            <div class="flex flex-col justify-between h-full w-full">
              <div class="mb-8">
                <h2
                  class="mb-5 text-3xl md:text-5xl font-heading tracking-px-n leading-tight"
                >
                  Blog Impact Group
                </h2>
                <p class="text-gray-600 font-medium leading-relaxed">
                  Explorez notre blog pour des conseils, des histoires inspirantes et des
                  connaissances pour les jeunes entrepreneurs congolais.
                </p>

                <p class="mt-4 text-gray-600 font-medium leading-relaxed">
                  Restez informés sur nos initiatives et opportunités de formation.
                </p>
              </div>
              <a
                class="inline-flex justify-center md:justify-start items-center text-blue_1 hover:text-primary leading-normal"
                href="#"
              >
                <span class="mr-2 font-semibold">Voir tous les articles</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="mt-16 lg:mt-0 w-full lg:w-2/3 md:flex-1">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
              <CardsArticle :key="i" v-for="i in 2" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sr-only i-wrapper bg-yellow">
      <div class="i-container py-16 sm:py-24 sm:flex justify-between items-center">
        <div class="sm:w-1/2 text-white">
          <h2 class="text-3xl sm:text-4xl text-blue">Notre mission</h2>
          <p class="mt-6 text-lg font-medium">
            Chez Impact Group, notre mission est de catalyser la transformation. Nous
            accompagnons les jeunes entrepreneurs avec des ressources techniques,
            financières et un encadrement solide.
          </p>
          <p class="mt-4">
            Notre objectif est double : promouvoir une économie florissante tout en
            favorisant la paix et l'inclusion. Nous croyons au pouvoir de chaque
            entrepreneur pour contribuer au développement de la RDC et édifier un avenir
            meilleur.
          </p>
        </div>
        <div class="sm:w-1/2 mt-10 sm:mt-0">
          <img src="/img/contents/1.png" class="w-[300px] mx-auto" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { CountUp } from "assets/js/countUp";

onMounted(() => {
  function countStart() {
    const $counters = document.querySelectorAll(".js-count-up"),
      options = {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        duration: 3,
      };

    $counters.forEach((item) => {
      const value = item.dataset.value;
      const counter = new CountUp(item, value, options);
      counter.start();
    });
  }

  function countStart_obs() {
    const sections = document.querySelectorAll(".level-counter");
    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countStart();
        }
      });
    }, options);
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
  setTimeout(() => {
    countStart_obs();
  }, 1000);
});
</script>
