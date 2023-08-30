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
            v-if="!sentState"
            action=""
            class="relative overflow-hidden bg-white border border-gray-200 rounded-md w-full max-w-full lg:max-w-[500px] p-4 py-8 sm:p-8 space-y-4"
          >
            <div v-if="isPending">
              <div
                class="z-20 absolute bg-white opacity-50 left-0 right-0 w-full h-full"
              ></div>

              <span>
                <svg class="spinner z-20" viewBox="0 0 50 50">
                  <circle
                    class="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke-width="5"
                  ></circle>
                </svg>
              </span>
            </div>

            <div>
              <h2 class="text-xl">Fromulaire de contact</h2>
            </div>
            <div class="form-group w-full">
              <label
                for="nom"
                class="transition-all duration-500 ease-in-out text-sm text-gray-500"
                v-if="_nom !== ''"
                >Nom & Post-nom
              </label>

              <input
                required
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
                :class="
                  !isvalidEmail
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-400 focus:border-blue'
                "
                class="py-2 bg-transparent focus:border-b-2 focus:border-b-gray-400 placeholder:text-gray-400 border-b w-full border-b-gray-300"
              />
            </div>

            <div class="transition-all duration-500 ease-in-out form-group w-full">
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

            <div
              v-if="requiredState"
              class="bg-red-100 text-red-500 py-2 px-4 text-sm font-medium border-l-2 border-l-red-500"
            >
              <p>* Veuillez remplir tous les champs.</p>
            </div>

            <div
              v-if="!isvalidEmail"
              class="bg-red-100 text-red-500 py-2 px-4 text-sm font-medium border-l-2 border-l-red-500"
            >
              <p>* Veuillez entrer une adresse e-mail valide</p>
            </div>

            <div
              v-if="useConstactStore().$state.isError"
              class="bg-red-100 text-red-500 py-2 px-4 text-sm font-medium border-l-2 border-l-red-500"
            >
              <p>
                😥 Impossible d'envoyer le message pour le moment. Appellez-nous au
                <a href="tel:+243999573957" class="underline font-semibold"
                  >+243 999 573 957</a
                >
              </p>
            </div>

            <div class="w-full flex justify-center pb-2">
              <button
                @click="sendMessage_fx()"
                type="button"
                class="w-auto i-btn i-btn__blue_1"
              >
                <span v-if="!isPending">Envoyer le message</span>
                <div v-else>Envoie encours ...</div>
              </button>
            </div>
          </form>

          <div
            v-else
            class="flex justify-center px-8 sm:px-12 items-center min-h-full relative overflow-hidden bg-white border border-gray-200 rounded-md w-full max-w-full lg:max-w-[500px] p-4 py-8 sm:p-8 space-y-4"
          >
            <div class="text-center">
              <h2>👋 Bonjour {{ _nom }}</h2>
              <p class="mt-4 text-gray-600">
                Votre message a été envoyé ! Nous vous écrirons à votre adresse e-mail "
                <span class="text-primary font-medium">{{ _adresse_email }}</span> " sous
                peu.
              </p>
              <div class="border-t border-t-gray-200 mt-8 pt-4">
                <h3 class="mt-4 text-xl">En attendant, découvrez :</h3>
                <div class="flex justify-center flex-wrap mt-6">
                  <NuxtLink
                    to="/evenements"
                    class="text-primary p-2 font-semibold flex justify-center items-center"
                  >
                    <span class="i-underline-animation--txt"> Nos évènements </span>

                    <span class="ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </span>
                  </NuxtLink>
                  <NuxtLink
                    to="/blog"
                    class="p-2 font-semibold flex justify-center items-center text-blue_1"
                  >
                    <span class="i-underline-animation--txt"> Notre blog </span>

                    <span class="ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </span>
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
import { useConstactStore } from "~/store/contact";
useConstactStore().$state.isError = false;

const config = useRuntimeConfig();

const _telephone = ref("");
const _nom = ref("");
const _message = ref("");
const _adresse_email = ref("");

const requiredState = ref(false);
const sentState = ref(false);
const isvalidEmail = ref(true);
const checkingForm = ref(false);
const isPending = ref(false);

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const mail = useMail();

const sendMessage_fx = async () => {
  try {
    isPending.value = true;
    checkingForm.value = true;
    useConstactStore().$state.isError = false;
    useConstactStore().$state.isSuccess = false;

    if (
      _nom.value !== "" &&
      _telephone.value !== "" &&
      _adresse_email.value !== "" &&
      _message.value !== "" &&
      _adresse_email.value !== ""
    ) {
      requiredState.value = false;

      if (validateEmail(_adresse_email.value)) {
        isvalidEmail.value = true;
        await mail.send({
          from: config.public.email_sender,
          subject: `Formulaire de contact - ${_nom.value}`,
          text: `Envoyé par ${_nom.value} \n\n${_message.value} \n\nAdresse e-mail : ${_adresse_email.value} \n\nNuméro de téléphone : ${_telephone.value}`,
          html: `
              <h4>Envoyé par ${_nom.value}</h4>
              <br>
              <p>${_message.value}</p>
              <br>
              <p>Adresse e-mail : ${_adresse_email.value}</p>
              <p>Numéro de téléphone : ${_telephone.value}</p>

          `,
          replyTo: _adresse_email.value,
        });
        checkingForm.value = false;
        sentState.value = true;
        isPending.value = false;
        useConstactStore().$state.isSuccess = true;
      } else {
        isvalidEmail.value = false;
      }
      checkingForm.value = true;
      isvalidEmail.value = false;
    } else {
      requiredState.value = true;
    }
    isPending.value = false;
  } catch (e) {
    console.log(e);
    isPending.value = false;
    useConstactStore().$state.isError = true;
    isvalidEmail.value = true;
    requiredState.value = false;
  }
};

const title = "Contacts - Impact Group";

useHead({
  title,
});
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
}
</style>
