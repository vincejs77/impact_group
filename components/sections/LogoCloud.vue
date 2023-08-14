<template>
  <div class="grid grid-cols-2 md:grid-cols-4 items-center lg:-mx-0">
    <div :key="logo" v-for="logo in logoCloud" class="w-full py-4 lg:px-0">
      <div class="w-auto py-0 mx-auto bg-blue-50 clip-path-both text-center">
        <img class="h-12 mx-auto" :src="logo.img" alt="" />
        <p class="mt-2 text-sm font-medium text-gray-600">{{ logo.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const logoCloud = [
  {
    name: "Halco",
    img: "/img/brand/partners/173757e6-4232-458e-a56c-2f4cd69bb963.JPG",
  },
  {
    name: "Elabif SARL",
    img: "/img/brand/partners/Elabif.jpg",
  },
  {
    name: "APEF asbl",
    img: "/img/brand/partners/IMG_0935.JPG",
  },
  {
    name: "Chefferie de Luhwindja",
    img: "/img/brand/partners/IMG_5045.PNG",
  },

  {
    name: "Change For All",
    img: "/img/brand/partners/IMG_7536.JPG",
  },

  {
    name: "BAIC",
    img: "/img/brand/partners/IMG_9787.jpg",
  },

  {
    name: "Sighted Design",
    img: "/img/brand/partners/logos-sighted.png",
  },

  {
    name: "IMARA Marketing and Services",
    img: "/img/brand/partners/imara.PNG",
  },
];
</script>
