<template>
  <div>
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
</script>
