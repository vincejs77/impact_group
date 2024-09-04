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
              class="leading-[1.2] text-3xl sm:text-5xl sm:leading-[1.2] text-blue font-black"
            >
              La meilleure façon de prédire l'avenir.
              <span class="text-blue opacity-80"> est de le créer.</span>
            </h1>
            <p class="mt-4 text-gray-700 text-lg">
              Impact Group vous accompagne dans la création d’entreprises.
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
    <section class="i-wrapper bg-blue">
      <div class="w-full md:w-2/2 md:flex justify-between">
        <div
          class="level-counter w-full md:w-1/2 flex lg:justify-end py-10 px-4 sm:px-8 md:px-8 lg:p-16 bg-blue text-white"
        >
          <div class="max-w-[380px] sm:max-w-[420px] sm:py-8">
            <p class="text-xs text-primary font-bold uppercase sr-only">Notre impact</p>
            <h2 class="mb-6 text-3xl sm:text-5xl mt-0">Nous façonnons l’avenir !</h2>
            <p class="text-lg">
              Nous sommes déterminés à soutenir les jeunes entrepreneurs et promouvoir la
              paix et la croissance économique en République Démocratique du Congo.
            </p>

            <div class="flex justify-between sm:justify-start mt-8">
              <div>
                <div class="sm:w-32">
                  <p class="text-sm text-gray-300 font-medium leading-normal">
                    Entreprises accompagnées
                  </p>
                  <h2
                    class="mt-3 text-3xl md:text-4xl font-bold font-heading tracking-px-n leading-tight"
                  >
                    <span class="text-primary">+</span>
                    <span class="js-count-up" data-value="52"></span>
                  </h2>
                </div>
              </div>
              <div class="min-h-full w-[1px] bg-gray-300 bg-opacity-30 mr-4"></div>
              <div>
                <div class="sm:w-44">
                  <p class="w-32 text-sm text-gray-300 font-medium leading-normal">
                    Réseau de jeunes entrepreneurs
                  </p>
                  <h2
                    class="mt-3 font-extrabold font-serif text-3xl md:text-4xl font-heading tracking-px-n leading-tight"
                  >
                    <span class="text-primary">+</span>

                    <span class="js-count-up" data-value="1000"></span>
                  </h2>
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
      <div class="i-container py-16 sm:py-24">
        <div class="flex justify-between flex-col lg:flex-row lg:space-x-12">
          <div
            class="max-w-md md:max-w-full mx-auto md:mx-0 w-full lg:w-1/3 text-center md:text-left"
          >
            <div class="flex flex-col justify-between h-full w-full">
              <div class="mb-8">
                <p
                  class="text-xs text-primary font-bold uppercase text-center md:text-left mb-4"
                >
                  Blog
                </p>
                <h2
                  class="mb-5 text-3xl md:text-5xl font-heading tracking-px-n leading-tight"
                >
                  Blog Impact Group
                </h2>
                <p class="text-gray-600 font-medium leading-relaxed">
                  Explorez notre blog pour des conseils, des histoires inspirantes et des
                  connaissances pour les jeunes entrepreneurs congolais.
                </p>

                <p class="mt-4 text-gray-600 font-medium leading-relaxed">
                  Restez informés sur nos initiatives et opportunités de formation.
                </p>
              </div>
              <NuxtLink
                to="/blog"
                class="inline-flex justify-center md:justify-start items-center text-blue_1 hover:text-primary leading-normal"
              >
                <span class="mr-2 font-semibold">Voir tous les articles</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div class="mt-16 lg:mt-0 w-full lg:w-2/3 md:flex-1">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
              <CardsArticle
                :key="article"
                v-for="article in data_articles"
                v-bind="article"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="i-wrapper bg-blue_1 bg-opacity-5 overflow-hidden">
      <div class="i-container px-4 mx-auto py-16 sm:py-24">
        <p class="text-xs text-primary font-bold uppercase text-center mb-4">
          évènements
        </p>

        <h2
          class="mb-4 text-3xl md:text-5xl text-center font-heading tracking-px-n leading-tight"
        >
          Évènements
        </h2>
        <p
          class="mb-12 text-gray-600 text-center font-medium leading-relaxed md:max-w-sm mx-auto"
        >
          Découvrez nos évènements passés et à venir.
        </p>
        <div class="md:max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardsEvenement
              v-bind="evenement"
              :key="evenement"
              v-for="evenement in data_evenements"
            />
          </div>

          <div class="flex justify-center mt-8">
            <NuxtLink
              to="/evenements"
              class="inline-flex justify-center md:justify-start items-center text-blue_1 hover:text-primary leading-normal"
            >
              <span class="mr-2 font-semibold relative"
                >Voir tous les évènements

                <span class="absolute -bottom-1 h-[3px] w-full left-0 bg-gray-200"></span>
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="i-wrapper">
      <div class="i-container py-16 sm:py-24 overflow-hidden">
        <h2 class="text-xl text-center mt-0">Ils nous ont approuvés</h2>
        <div class="mt-8 pt-0">
          <SectionsLogoCloud />
        </div>
        <div class="mt-8">
          <div class="relative rounded-md md:rounded-xl">
            <div class="relative mt-8">
              <div class="flex justify-left items-center">
                <svg
                  class="mb-2.5 mr-2 sm:mr-4 sm:mb-4 w-8 md:w-16"
                  width="47"
                  height="36"
                  viewBox="0 0 47 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 36V25.6999C0 22.7377 0.554721 19.6578 1.66416 16.46C2.80722 13.2286 4.35372 10.1823 6.30365 7.32118C8.2872 4.42637 10.5061 1.98598 12.9603 0L21.4324 5.5035C19.4489 8.4993 17.7847 11.6297 16.4399 14.8948C15.1288 18.1262 14.49 21.6943 14.5236 25.5989V36H0ZM25.5676 36V25.6999C25.5676 22.7377 26.1223 19.6578 27.2318 16.46C28.3748 13.2286 29.9213 10.1823 31.8712 7.32118C33.8548 4.42637 36.0737 1.98598 38.5279 0L47 5.5035C45.0165 8.4993 43.3523 11.6297 42.0075 14.8948C40.6964 18.1262 40.0576 21.6943 40.0912 25.5989V36H25.5676Z"
                    fill="#fd7135"
                  ></path>
                </svg>

                <div
                  class="top-1.5 lg:top-3 text-lg lg:text-xl font-bold left-12 sm:left-16 text-blue_1"
                >
                  Témoignages
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="relative">
            <SectionsTestimonials :data_testimonials="data_testimonials" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { CountUp } from "assets/js/countUp";

const sanity = useSanity();

const query_testimonials = computed(() => {
  return groq`*[_type == "temoignages"] {_id,nom,entreprise,bio,"imageUrl":image.asset->}`;
});

const query_articles = ref(
  groq`*[_type == "articles"] | order(_createdAt desc){_id,slug,titre,description,publishedAt,_updatedAt,
  "imageUrl":image.asset->,categories_articles[]->{titre},
  auteur->{"imageUrl":image.asset->{url},nom,bio}}`
);

const query_evenements = ref(
  groq`*[_type == "evenements" && visibility == 'visible'] [0...2] | order(_createdAt desc) {_id,status,mode,slug,titre,description,publishedAt,_updatedAt,startedAt,endedAt,lieu,
  "imageUrl":image.asset->,categories_evenements[]->{titre}}`
);

const [
  { data: data_testimonials },
  { data: data_articles },
  { data: data_evenements },
] = await Promise.all([
  useAsyncData("data-testimonials", () => sanity.fetch(query_testimonials.value)),
  useAsyncData("data-articles-home", () => sanity.fetch(query_articles.value)),
  useAsyncData("data-evenement-home", () => sanity.fetch(query_evenements.value)),
]);

onMounted(() => {
  function countStart() {
    const $counters = document.querySelectorAll(".js-count-up"),
      options = {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        duration: 3,
      };

    $counters.forEach((item) => {
      const value = item.dataset.value;
      const counter = new CountUp(item, value, options);
      counter.start();
    });
  }

  function countStart_obs() {
    const sections = document.querySelectorAll(".level-counter");
    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countStart();
        }
      });
    }, options);
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
  setTimeout(() => {
    countStart_obs();
  }, 1000);
});

const title = "Accueil - Impact Group";

useHead({
  title,
});
</script>
