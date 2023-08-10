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
                  <span>En savoir plus</span>
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
            <p class="mt-4">
              Plus de 52 entreprises accompagnées, une communauté de plus de 1000 jeunes
              entrepreneurs unis.
            </p>
            <div class="mt-6">
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
              class="flex justify-center items-center mx-auto w-20 h-20 sm:w-24 sm:h-24 p-4 sm:p-8 rounded-full"
              v-html="item.svg"
            ></div>
            <div class="mt-4">
              <h3 class="text-2xl">{{ item.name }}</h3>
              <p class="text-gray-600 my-4">
                {{ item.description }}
              </p>
              <NuxtLink to="/services" class="text-blue_1"> En savoir plus </NuxtLink>
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

    <section class="i-wrapper">
      <div class="w-full md:flex justify-between">
        <div
          class="md:w-1/2 flex lg:justify-end items-center py-16 px-4 sm:px-8 md:px-8 lg:p-16 sm:py-24 bg-blue_1 text-white"
        >
          <div class="max-w-[380px] sm:max-w-[420px]">
            <p class="text-gray-300 font-bold uppercase">Nous contacter</p>
            <h2 class="mb-6 text-3xl sm:text-4xl mt-4">Prenez contact avec nous</h2>
            <p>
              Nous sommes impatients de vous entendre. Que ce soit pour des questions, des
              collaborations ou simplement pour échanger, nous sommes là pour vous aider.
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
                class="w-8 h-8 sm:w-10 sm:h-10 text-blue"
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
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 text-blue_1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
</svg>

    `,
  },

  {
    name: "Coaching Personnalisé",
    bg: "bg-blue_2 bg-opacity-10",
    description: "Avec accompagnement sur mesure grâce à nos mentors expérimentés",
    svg: `

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 text-blue_2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>
    `,
  },
  {
    name: "Accompagnement aux entrepreneurs",
    bg: "bg-yellow bg-opacity-10",
    description: "Boostez votre entreprise avec notre expertise logistique et financier.",
    svg: `

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 text-yellow">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>

    `,
  },
  {
    name: "Evènements entrepreneuriaux",
    bg: "bg-blue_2 bg-opacity-10",
    description: "Catalysez votre succès entrepreneurial avec nos événements uniques.",
    svg: `

    

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 text-blue_2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>

    `,
  },
  {
    name: "Promotion de la femme",
    bg: "bg-primary bg-opacity-10",
    description:
      "Programmes dédiés pour l'autonomisation des femmes entrepreneures, en RDC",
    svg: `
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>
    `,
  },
];
</script>
