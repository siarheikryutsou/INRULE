<script setup lang="ts">
useHead({
  meta: [
    { name: "description", content: "Explainable, AI-powered automation by combining decisioning, machine learning and process automation – without code." },
  ]
})
</script>

<template>
  <NuxtLoadingIndicator />
  <Header />
  <main class="flex py-4">
    <NuxtLayout />
  </main>
</template>
