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
                <NuxtLink to="#" class="w-auto i-btn i-btn__blue_1">
                  <span>En savoir plus</span>
                </NuxtLink>
              </div>
              <div>
                <NuxtLink to="#" class="i-btn i-btn__primary">
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
          class="w-full md:w-1/2 flex lg:justify-end py-10 px-4 sm:px-8 md:px-8 lg:p-16 sm:py-24 bg-blue text-white"
        >
          <div class="max-w-[380px] sm:max-w-[420px]">
            <p class="text-sm text-primary font-bold uppercase">Notre impact</p>
            <h2 class="mb-6 text-3xl sm:text-4xl mt-4">Nous façonnons l'avenir</h2>
            <p class="text-lg">
              Nous sommes déterminés à soutenir les jeunes entrepreneurs et promouvoir la
              paix et la croissance économique en RDC.
            </p>
            <p class="mt-4">
              Plus de 52 entreprises accompagnées, une communauté de plus de 1000 jeunes
              entrepreneurs unis.
            </p>
            <div class="mt-6">
              <NuxtLink to="#" class="i-btn i-btn__blue_1">
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
        <div class="text-center max-w-md mx-auto">
          <p class="text-primary font-bold">Nos Actions</p>
          <h2 class="text-3xl sm:text-4xl mt-4 mb-6">Nos domaines d'action</h2>
          <p class="text-gray-600">
            Nous réunissons les bonnes personnes pour remettre en question la pensée
            établie et conduire la transformation
          </p>
        </div>
        <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div :key="item" v-for="item in strategy" class="text-center bg-gray-100 p-8">
            <div
              :class="item.bg"
              class="flex justify-center items-center mx-auto w-32 h-32 sm:w-32 sm:h-32 p-8 rounded-full"
              v-html="item.svg"
            ></div>
            <div class="mt-4">
              <h3 class="text-2xl">{{ item.name }}</h3>
              <p class="text-gray-600 my-4">
                {{ item.description }}
              </p>
              <NuxtLink class="text-blue_1"> En savoir plus </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="i-wrapper bg-yellow">
      <div class="i-container py-16 sm:py-24 sm:flex justify-between items-center">
        <div class="sm:w-1/2 text-white">
          <h2 class="text-3xl sm:text-4xl text-blue">Que faisons-nous ?</h2>
          <p class="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo doloribus ad
            corrupti explicabo dolorem.
          </p>
          <p class="mt-4">
            Cum nostrum expedita similique optio necessitatibus sunt officia? Perspiciatis
            quas minus facere dol oribus quis dignissimos! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ut, neque dolor! Officiis officia, illum dolor
            amet neque nam minima blanditiis,
          </p>
        </div>
        <div class="sm:w-1/2 mt-10 sm:mt-0">
          <img src="/img/contents/1.png" class="w-[300px] mx-auto" alt="" />
        </div>
      </div>
    </section>

    <section class="i-wrapper">
      <div class="w-full md:flex justify-between">
        <div
          class="md:w-1/2 flex lg:justify-end items-center py-16 px-4 sm:px-8 md:px-8 lg:p-16 sm:py-24 bg-blue_1 text-white"
        >
          <div class="max-w-[380px] sm:max-w-[420px]">
            <p class="text-gray-300 font-bold uppercase">Nous contacter</p>
            <h2 class="mb-6 text-3xl sm:text-4xl mt-4">Prenez contact avec nous</h2>
            <p>
              Nous réunissons les bonnes personnes pour remettre en question la pensée
              établie et conduire la transformation
            </p>
          </div>
        </div>
        <div
          class="md:w-1/2 z-0 flex justify-start px-4 py-16 md:p-16 bg-primary text-white"
        >
          <form action="" class="w-full max-w-full sm:max-w-[390px] sm:pl-8 space-y-4">
            <div class="form-group w-full">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nom & Post-nom"
                class="py-2 bg-transparent focus:border-b-2 placeholder:text-gray-100 border-b w-full border-b-gray-300"
              />
            </div>
            <div class="form-group w-full">
              <input
                type="email"
                name="enail"
                id="email"
                placeholder="Adresse e-mail"
                class="py-2 bg-transparent focus:border-b-2 placeholder:text-gray-100 border-b w-full border-b-gray-300"
              />
            </div>

            <div class="form-group w-full">
              <textarea
                name=""
                id=""
                cols="20"
                rows="4"
                class="bg-transparent focus:border-b-2 placeholder:text-gray-100 border-b w-full border-b-gray-300"
                placeholder="Message"
              ></textarea>
            </div>

            <div class="w-full flex justify-center">
              <NuxtLink to="#" class="w-auto i-btn i-btn__blue_1">
                <span>Envoyer le message</span>
              </NuxtLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const strategy = [
  {
    name: "Formations et Conseils",
    bg: "bg-blue bg-opacity-10",
    description:
      "Nous proposons des formations complètes dans divers domaines clés de l'entrepreneuriat",
    svg: `
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 sm:w-12 sm:h-12 text-blue"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                />
              </svg>
    `,
  },

  {
    name: "Incubation de Startups",
    bg: "bg-blue_1 bg-opacity-10",
    description:
      "Avec incubateur dynamique pour transformer vos idées novatrices en projets concrets",
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-12 sm:h-12 text-blue_1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
</svg>

    `,
  },

  {
    name: "Coaching Personnalisé",
    bg: "bg-blue_2 bg-opacity-10",
    description: "Avec accompagnement sur mesure grâce à nos mentors expérimentés",
    svg: `

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-12 sm:h-12 text-blue_2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>
    `,
  },
];
</script>
