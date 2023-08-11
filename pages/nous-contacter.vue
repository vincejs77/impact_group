<template>
  <div>
    <section class="i-wrapper py-16">
      <div class="i-container mx-auto">
        <h1 class="text-3xl sm:text-4xl">Nous contacter</h1>
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

<script setup></script>
