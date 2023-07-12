<template>
  <div class="index-page" id="index-page">
    <section class="relative i-wrapper bg-center bg-cover bg-[url(/img/bg/2.jpeg)]">
      <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-[#ffffffd3]"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#ffffff]"
      ></div>
      <div class="relative z-10 i-container py-16 sm:py-24">
        <div class="i-hero i-hero__v1">
          <div class="i-hero--text max-w-md">
            <h1
              class="leading-[1.2] font-black text-4xl sm:text-5xl sm:leading-[1.2] text-blue"
            >
              Aider les petites entreprises
              <span class="text-blue opacity-80"> à grandir</span>
            </h1>
            <p class="mt-8 text-gray-700 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam beatae
              quaerat impedit, expedita nemo sunt
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
      <div class="w-full md:flex justify-between lg:space-x-12">
        <div
          class="lg:rounded-tr-full lg:rounded-br-full md:w-1/2 flex lg:justify-end py-10 px-4 sm:px-8 md:px-8 lg:p-16 sm:py-24 bg-blue text-white"
        >
          <div class="max-w-[380px] sm:max-w-[390px]">
            <p class="text-primary font-bold">ABOUT US</p>
            <h2 class="mb-6 text-3xl sm:text-4xl mt-4">Nous façonnons l'avenir</h2>
            <p>
              Nous réunissons les bonnes personnes pour remettre en question la pensée
              établie et conduire la transformation
            </p>
            <div class="mt-6">
              <NuxtLink to="#" class="i-btn i-btn__blue_1">
                <span>En savoir plus</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="lg:rounded-tl-full lg:rounded-bl-full md:w-1/2 z-0 flex justify-start px-4 py-32 md:p-16 bg-center bg-cover bg-[url(/img/bg/6.jpg)]"
        ></div>
      </div>
    </section>

    <section class="i-wrapper">
      <div class="i-container py-16 sm:py-24">
        <div class="text-center max-w-md mx-auto">
          <p class="text-primary font-bold">ÉVALUATION</p>
          <h2 class="text-3xl sm:text-4xl mt-4 mb-6">Pourquoi notre conseil ?</h2>
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
          <h2 class="text-3xl text-blue">Que faisons-nous ?</h2>
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

    <section class="i-wrapper py-16">
      <div class="w-full">
        <div class="w-full md:flex justify-between lg:space-x-12">
          <div
            class="lg:rounded-tr-full lg:rounded-br-full md:w-1/2 flex lg:justify-end py-10 px-4 sm:px-8 md:px-8 lg:p-16 sm:py-24"
          >
            <div class="max-w-[380px] sm:max-w-[390px]">
              <p class="text-primary font-bold uppercase">Notre equipe</p>
              <h2 class="mb-6 text-3xl sm:text-4xl mt-4">Nos experts vous attendent</h2>
              <p>
                We bring the right people together to challenge established thinking and
                drive transformation.
              </p>
            </div>
          </div>
          <div
            class="lg:rounded-tl-full lg:rounded-bl-full md:w-1/2 z-0 flex justify-start px-4 py-32 md:p-16 bg-center bg-cover bg-[url(/img/bg/1.jpeg)]"
          ></div>
        </div>
        <div class="i-container mx-auto">
          <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div :key="item" v-for="item in team" class="text-center bg-gray-100 p-8">
              <div class="flex justify-center items-center mx-auto p-4 rounded-full">
                <img
                  :src="item.img"
                  class="rounded-full w-[80px] h-[80px] object-cover"
                  alt=""
                />
              </div>
              <div class="mt-0 flex flex-col h-[120px] justify-between">
                <div>
                  <h3 class="text-lg">{{ item.name }}</h3>
                  <p class="text-gray-600 my-4 text-sm">
                    {{ item.titre }}
                  </p>
                </div>

                <div>
                  <NuxtLink class="text-blue_1 text-sm">
                    email@impact-group.org
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="i-wrapper">
      <div class="w-full md:flex justify-between lg:space-x-12">
        <div
          class="lg:rounded-tr-full lg:rounded-br-full md:w-1/2 flex lg:justify-end items-center py-16 px-4 sm:px-8 md:px-8 lg:p-16 sm:py-24 bg-blue_1 text-white"
        >
          <div class="max-w-[380px] sm:max-w-[390px]">
            <p class="text-gray-300 font-bold uppercase">Nous contacter</p>
            <h2 class="mb-6 text-3xl sm:text-4xl mt-4">Prenez contact avec nous</h2>
            <p>
              Nous réunissons les bonnes personnes pour remettre en question la pensée
              établie et conduire la transformation
            </p>
          </div>
        </div>
        <div
          class="lg:rounded-tl-full lg:rounded-bl-full md:w-1/2 z-0 flex justify-start px-4 py-16 md:p-16 bg-primary text-white"
        >
          <form action="" class="w-full max-w-full sm:max-w-[390px] sm:pl-8 space-y-4">
            <div class="form-group w-full">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nom & Post-nom"
                class="py-2 bg-transparent placeholder:text-gray-100 border-b w-full border-b-gray-300"
              />
            </div>
            <div class="form-group w-full">
              <input
                type="email"
                name="enail"
                id="email"
                placeholder="Adresse e-mail"
                class="py-2 bg-transparent placeholder:text-gray-100 border-b w-full border-b-gray-300"
              />
            </div>

            <div class="form-group w-full">
              <textarea
                name=""
                id=""
                cols="20"
                rows="4"
                class="bg-transparent placeholder:text-gray-100 border-b w-full border-b-gray-300"
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
const team = [
  {
    name: "Nom & Post-nom",
    img: "/img/IMG_3744.JPG",
    titre: "Présitent du conseil d'administration",
  },
  {
    name: "Nom & Post-nom",
    img: "/img/IMG_0134.JPG",
    titre: "Vice-présitente du conseil d'administration",
  },
  {
    name: "Justin Burume",
    img: "/img/images.png",
    titre: "Comptable",
  },
  {
    name: "Nom & Post-nom",
    img: "/img/images.png",
    titre: "Titre ou role",
  },
];
const strategy = [
  {
    name: "Strategie 1",
    bg: "bg-blue bg-opacity-10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    name: "Strategie 2",
    bg: "bg-blue_1 bg-opacity-10",
    description: "Duis non justo vitae justo dignissim maximus a quis ante.",
    svg: `

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-12 sm:h-12 text-blue_1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
  </svg>

    `,
  },

  {
    name: "Strategie 3",
    bg: "bg-blue_2 bg-opacity-10",
    description: "Duis non justo vitae justo dignissim maximus a quis ante.",
    svg: `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-12 sm:h-12 text-blue_2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
</svg>

    `,
  },
];
</script>
