<template>
  <div id="id">
    <section class="i-wrapper">
      <div class="i-container py-24">
        <h1 class="text-center text-5xl">
          {{ route.params.slug }}
        </h1>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
