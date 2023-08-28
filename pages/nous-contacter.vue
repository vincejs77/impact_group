<template>
  <div class="bg-blue bg-opacity-[0.05]">
    <section class="i-wrapper">
      <div class="w-full lg:flex justify-between i-container">
        <div class="lg:w-1/2 flex lg:justify-end items-center py-16 md:py-24 lg:pr-16">
          <div class="">
            <div class="mb-4">
              <img
                class="w-[50px]"
                src="/img/contents/filters_format_contact.webp"
                alt=""
              />
            </div>
            <div>
              <p class="text-primary font-bold uppercase text-xs">Nous contacter</p>
              <h2 class="mb-4 text-3xl sm:text-4xl mt-2">
                Prenez contact <span class="opacity-80">avec nous</span>
              </h2>
              <p>
                Que ce soit pour des questions, des collaborations ou simplement pour
                échanger, nous sommes là pour vous aider.
              </p>
            </div>

            <div
              class="mt-8 -mb-4 flex justify-between flex-wrap sm:flex-nowrap sm:space-x-4"
            >
              <div
                class="mb-4 group i-btn-2 w-full bg-blue text-white py-4 px-4 rounded-md"
              >
                <a
                  href="mailto:info@impactgp.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  class=""
                >
                  <span class="text-sm opacity-80 flex justify-start items-center mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-4 h-4 mr-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>

                    Nous écrire</span
                  >
                  <p class="group-hover:underline">info@impactgp.net</p>
                </a>
              </div>
              <div
                class="mb-4 group i-btn-2 w-full bg-white border-2 border-blue border-opacity-40 py-4 px-4 rounded-md"
              >
                <a href="tel:+243999573957" target="_blank" rel="noopener noreferrer">
                  <span
                    class="text-sm text-gray-500 flex justify-start items-center mb-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-4 h-4 mr-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    Nous appeler</span
                  >
                  <p class="group-hover:underline">+243999573957</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 z-0 flex lg:justify-end items-center lg:py-16 pb-16">
          <form
            action=""
            class="bg-white border border-gray-200 rounded-md w-full max-w-full lg:max-w-[500px] p-4 py-8 sm:p-8 space-y-4"
          >
            <div>
              <h2 class="text-xl">Fromulaire de contact</h2>
            </div>
            <div class="form-group w-full">
              <label for="nom" class="text-sm text-gray-500" v-if="_nom !== ''"
                >Nom & Post-nom
              </label>

              <input
                v-model="_nom"
                type="text"
                name="nom"
                id="nom"
                placeholder="Nom & Post-nom"
                class="py-2 bg-transparent focus:border-b-2 focus:border-b-gray-400 placeholder:text-gray-400 border-b w-full border-b-gray-300"
              />
            </div>
            <div class="form-group w-full">
              <label
                for="telephone"
                class="text-sm text-gray-500"
                v-if="_telephone !== ''"
              >
                Téléphone
              </label>

              <input
                required
                v-model="_telephone"
                type="tel"
                name="telephone"
                id="telephone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Numéro de téléphone"
                class="py-2 bg-transparent focus:border-b-2 focus:border-b-gray-400 placeholder:text-gray-400 border-b w-full border-b-gray-300"
              />
            </div>

            <div class="form-group w-full relative">
              <label
                for="email"
                class="text-sm text-gray-500"
                v-if="_adresse_email !== ''"
                >E-mail
              </label>

              <input
                required
                v-model="_adresse_email"
                type="email"
                name="email"
                id="email"
                placeholder="Adresse e-mail"
                class="py-2 bg-transparent focus:border-b-2 focus:border-b-gray-400 placeholder:text-gray-400 border-b w-full border-b-gray-300"
              />
            </div>

            <div class="form-group w-full">
              <label for="message" class="text-sm text-gray-500" v-if="_message !== ''"
                >Message
              </label>

              <textarea
                required
                v-model="_message"
                name="message"
                id="message"
                cols="20"
                rows="4"
                class="bg-transparent focus:border-b-2 focus:border-b-gray-400 placeholder:text-gray-400 border-b w-full border-b-gray-300"
                placeholder="Message"
              ></textarea>
            </div>

            <div class="w-full flex justify-center pb-2">
              <button type="submit" class="w-auto i-btn i-btn__blue_1">
                <span>Envoyer le message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const _telephone = ref("");
const _nom = ref("");
const _message = ref("");
const _adresse_email = ref("");
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #eff2fa inset !important;
}
</style>
