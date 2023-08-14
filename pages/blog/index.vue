<template>
  <div>
    <section class="i-wrapper py-16">
      <div class="i-container mx-auto">
        <div class="mb-8">
          <h1 class="text-3xl sm:text-4xl">Notre Blog</h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <CardsArticle :key="i" v-for="i in 2" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
