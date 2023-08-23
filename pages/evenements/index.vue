<template>
  <div>
    <section class="i-wrapper py-16">
      <div class="i-container mx-auto">
        <div class="mb-8 text-center">
          <h1 class="text-3xl sm:text-4xl">Nos Événements</h1>
          <p class="text-gray-600">Passés et à venir</p>
        </div>

        <div class="md:max-w-2xl mx-auto">
          <div class="flex flex-wrap space-y-8">
            <CardsEvenement
              v-bind="evenement"
              :key="evenement"
              v-for="evenement in evenements"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const evenements = [
  { status: "à venir", titre: "Forum Entrepreneurial 2023", place: "En ligne" },
];
</script>
