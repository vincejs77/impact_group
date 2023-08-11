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
              Nous aidons les petites entreprises
              <span class="text-blue opacity-80"> à grandir</span>
            </h1>
            <p class="mt-8 text-gray-700 text-base">
              La meilleur façon de prédire votre avenir est de le créer. Impact Group vous
              accompagne dans la création d’entreprise en RDC et ailleurs, pour réussir.
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
      <div class="w-full w-2/2 md:flex justify-between">
        <div
          class="w-full md:w-1/2 flex lg:justify-end py-10 px-4 sm:px-8 md:px-8 lg:p-16 bg-blue text-white"
        >
          <div class="max-w-[380px] sm:max-w-[420px] sm:py-8">
            <p class="text-sm text-primary font-bold uppercase">Notre impact</p>
            <h2 class="mb-6 text-3xl sm:text-4xl mt-4">Nous façonnons l'avenir</h2>
            <p class="text-lg">
              Nous sommes déterminés à soutenir les jeunes entrepreneurs et promouvoir la
              paix et la croissance économique en RDC.
            </p>

            <div class="flex justify-between sm:justify-start mt-8">
              <div>
                <div class="w-32">
                  <h2
                    class="mb-3 text-3xl md:text-5xl font-bold font-heading tracking-px-n leading-tight"
                  >
                    52 <span class="text-primary">+</span>
                  </h2>
                  <p class="text-sm text-gray-300 font-medium leading-normal">
                    entreprises accompagnées
                  </p>
                </div>
              </div>
              <div class="min-h-full w-[1px] bg-gray-300 bg-opacity-30 mr-4"></div>
              <div>
                <div class="w-44">
                  <h2
                    class="font-extrabold font-serif mb-3 text-3xl md:text-5xl font-heading tracking-px-n leading-tight"
                  >
                    1000 <span class="text-primary">+</span>
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
      <div class="i-container py-16 sm:py-24"></div>
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

<script setup></script>
