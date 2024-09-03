<template>
  <div>
    <div class="z-0 flex items-center lg:justify-end">
      <form
        v-if="!sentState"
        action=""
        class="relative w-full max-w-full space-y-4 overflow-hidden pt-4 lg:max-w-[500px]"
      >
        <div v-if="isPending">
          <div
            class="absolute left-0 right-0 z-20 h-full w-full bg-white opacity-50"
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

        <div class="form-group w-full">
          <label
            for="nom"
            class="text-sm text-gray-500 transition-all duration-500 ease-in-out"
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
            class="w-full border-b border-b-gray-300 bg-transparent pt-0 pb-2 placeholder:text-gray-400 focus:border-b-2 focus:border-b-gray-400"
          />
        </div>
        <div class="form-group w-full">
          <label for="telephone" class="text-sm text-gray-500" v-if="_telephone !== ''">
            Téléphone
          </label>

          <input
            required
            v-model="_telephone"
            type="tel"
            name="telephone"
            id="telephone"
            placeholder="Numéro de téléphone"
            class="w-full border-b border-b-gray-300 bg-transparent pt-0 pb-2 placeholder:text-gray-400 focus:border-b-2 focus:border-b-gray-400"
          />
        </div>

        <div class="form-group relative w-full">
          <label for="email" class="text-sm text-gray-500" v-if="_adresse_email !== ''"
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
            class="w-full border-b border-b-gray-300 bg-transparent pt-0 pb-2 placeholder:text-gray-400 focus:border-b-2 focus:border-b-gray-400"
          />
        </div>

        <RadioGroup v-model="selected">
          <RadioGroupLabel class="sr-only">Tiquet</RadioGroupLabel>
          <div class="space-y-2">
            <label for="message" class="text-sm text-gray-500"
              >Type de ticket
              <span class="text-blue" v-if="selected.name == 'Étudiant'"
                >(une carte d'étudiant est requise pour tout ticket Étudiant)</span
              >
            </label>
            <RadioGroupOption
              as="template"
              v-for="plan in tickets"
              :key="plan.name"
              :value="plan"
              v-slot="{ active, checked }"
              @click="resetCount()"
            >
              <div
                :class="[
                  active ? 'ring-none outline-none border-none' : '',
                  checked ? 'bg-blue text-white ' : 'bg-white ',
                ]"
                class="outline-none overflow-hidden relative flex cursor-pointer rounded-lg px-4 py-4 focus:outline-none border border-gray-200"
              >
                <div class="flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-sm">
                      <RadioGroupLabel
                        as="p"
                        :class="checked ? 'text-white' : 'text-gray-900'"
                        class="font-semibold"
                      >
                        {{ plan.name }}
                      </RadioGroupLabel>
                      <RadioGroupDescription
                        as="span"
                        :class="checked ? 'text-sky-100' : 'text-gray-500'"
                        class="inline"
                      >
                        <span> {{ plan.price }}</span>
                        <span aria-hidden="true"> &middot; </span>
                        <span>Par ticket</span>
                      </RadioGroupDescription>
                    </div>
                  </div>
                  <div v-show="checked" class="shrink-0 text-white">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>

        <div class="form-group w-full transition-all duration-500 ease-in-out">
          <label for="message" class="text-sm text-gray-500"
            >Nombre de tickets
            <span class="text-blue" v-if="selected.name == 'Étudiant'"
              >(limité à un ticket pour toute réservation de ticket Étudiant)</span
            ></label
          >

          <div class="flex justify-start items-center mt-2 space-x-4">
            <div
              @click="downTicketCunt()"
              v-if="ticketCount > 1"
              class="cursor-pointer rounded-md flex items-center justify-center font-medium w-[30px] h-[30px] p-2 bg-blue px-2 py-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 w-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
              </svg>
            </div>
            <div>{{ ticketCount }}</div>
            <div
              @click="upTicketCunt()"
              class="cursor-pointer rounded-md flex items-center justify-center font-medium w-[30px] h-[30px] p-2 bg-blue px-2 py-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="form-group w-full transition-all duration-500 ease-in-out">
          <label for="message" class="text-sm text-gray-500" v-if="_message !== ''"
            >Message personnalisé (facultatif)
          </label>

          <textarea
            required
            v-model="_message"
            name="message"
            id="message"
            cols="20"
            rows="4"
            class="w-full border-b border-b-gray-300 bg-transparent placeholder:text-gray-400 focus:border-b-2 focus:border-b-gray-400"
            placeholder="Message personnalisé (facultatif)"
          ></textarea>
        </div>

        <div
          v-if="requiredState"
          class="border-l-2 border-l-red-500 bg-red-100 px-4 py-2 text-sm font-medium text-red-500"
        >
          <p>* Veuillez remplir tous les champs.</p>
        </div>

        <div
          v-if="!isvalidEmail"
          class="border-l-2 border-l-red-500 bg-red-100 px-4 py-2 text-sm font-medium text-red-500"
        >
          <p>* Veuillez entrer une adresse e-mail valide</p>
        </div>

        <div
          v-if="useConstactStore().$state.isError"
          class="border-l-2 border-l-red-500 bg-red-100 px-4 py-2 text-sm font-medium text-red-500"
        >
          <p>
            😥 Impossible d'envoyer la reservation pour le moment. Appellez-nous au
            <a href="tel:+243999573957" class="font-semibold underline"
              >+243 999 573 957</a
            >
          </p>
        </div>

        <div class="flex w-full justify-center pb-2">
          <button
            @click="sendMessage_fx()"
            type="button"
            class="i-btn i-btn__blue_1 w-auto"
          >
            <span v-if="!isPending">Confirmer</span>
            <div v-else>En cours ...</div>
          </button>
        </div>
      </form>

      <div
        v-else
        class="relative flex min-h-full w-full max-w-full items-center justify-center space-y-4 overflow-hidden px-8 py-0 sm:px-12 lg:max-w-[500px]"
      >
        <div class="text-center mt-4">
          <h2 class="text-xl">👋 Bonjour {{ _nom }}</h2>
          <p class="mt-4 text-gray-600">
            Votre reservation pour
            <span class="text-blue font-medium"
              >{{ ticketCount }} ticket(s) {{ selected.name }} à {{ selected.price }} par
              ticket</span
            >
            a été envoyée ! Nous vous écrirons à votre adresse e-mail "
            <span class="font-medium text-primary">{{ _adresse_email }}</span> " sous peu.
          </p>
          <p class="p-2 bg-gray-200 font-semibold mt-4 rounded-md">
            <span class="text-blue" v-if="selected.name == 'Étudiant'"
              >Une carte d'étudiant est requise pour tout ticket Étudiant</span
            >
          </p>
          <div class="mt-8 border-t border-t-gray-200 pt-4">
            <h3 class="mt-4 text-xl">En attendant, découvrez :</h3>
            <div class="mt-6 flex flex-wrap justify-center">
              <NuxtLink
                to="/evenements"
                class="flex items-center justify-center p-2 font-semibold text-primary"
              >
                <span class="i-underline-animation--txt"> Nos évènements </span>

                <span class="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="h-4 w-4"
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
                class="flex items-center justify-center p-2 font-semibold text-blue_1"
              >
                <span class="i-underline-animation--txt"> Notre blog </span>

                <span class="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="h-4 w-4"
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

import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const tickets = [
  {
    name: "Étudiant",
    price: "10$",
  },
  {
    name: "Standard",
    price: "15$",
  },
  {
    name: "VIP",
    price: "50$",
  },
];

const ticketCount = ref(1);

const selected = ref(tickets[0]);

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
      _adresse_email.value !== ""
    ) {
      requiredState.value = false;
      if (validateEmail(_adresse_email.value)) {
        isvalidEmail.value = true;
        await mail.send({
          from: config.public.email_sender,
          subject: `Inscription - ${props.event_titre} - par ${_nom.value}`,
          text: `Reservation par ${_nom.value} \n\nAdresse e-mail : ${_adresse_email.value}
            \n\nNuméro de téléphone : ${_telephone.value}
            \n\nType de ticket : ${selected.value.name} - ${selected.value.price}
            \n\nNombre de tickets : ${ticketCount.value}
            \n\n ${_message.value}
            `,
          html: `
              <h4>Envoyé par ${_nom.value}</h4>
              <br>
              <p>Adresse e-mail : ${_adresse_email.value}</p>
              <p>Numéro de téléphone : ${_telephone.value}</p>
              <p>Type de ticket : ${selected.value.name} - ${selected.value.price}</p>
              <p>Nombre de tickets : ${ticketCount.value}</p>
              <p>${_message.value}</p>
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

const resetCount = () => {
  ticketCount.value = 1;
};

const downTicketCunt = () => {
  if (selected.value.name == "Étudiant") {
    ticketCount.value = 1;
  } else {
    ticketCount.value = ticketCount.value - 1;
  }
};

const upTicketCunt = () => {
  if (selected.value.name == "Étudiant") {
    ticketCount.value = 1;
  } else {
    ticketCount.value = ticketCount.value + 1;
  }
};

const props = defineProps({
  event_titre: String,
});
</script>
