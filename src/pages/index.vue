<script setup lang="ts">

const cards = [
  {
    title: "New hire onboarding",
    tags: ["CATEGORY/STATUS"],
    message: "integrating a new employee with a company and its culture, tools etc.",
    sub: "19 days ago by John Scheffke",
    icon: "card_icon_01",
  },
  {
    title: "Payments",
    tags: ["CATEGORY/STATUS"],
    message: "integrating a new employee with a company and its culture, tools etc.",
    sub: "19 days ago by John Scheffke",
    icon: "card_icon_02",
  },
  {
    title: "New hire onboarding",
    tags: ["CATEGORY/STATUS"],
    message: "integrating a new employee with a company and its culture, tools etc.",
    sub: "19 days ago by John Scheffke",
    icon: "card_icon_03",
  },
  {
    title: "New hire onboarding",
    tags: ["CATEGORY/STATUS"],
    message: "integrating a new employee with a company and its culture, tools etc.",
    sub: "19 days ago by John Scheffke",
    icon: "card_icon_04",
  },
  {
    title: "New hire onboarding",
    tags: ["CATEGORY/STATUS"],
    message: "integrating a new employee with a company and its culture, tools etc.",
    sub: "19 days ago by John Scheffke",
    icon: "card_icon_05",
  }
];
</script>

<template>
  <div>
    <header class="flex items-center justify-between mb-3">
      <h1>Loan Products</h1>
      <button class="px-4 py-2 text-white bg-[#51A5C5] rounded text-sm font-medium hover:bg-[#4abde8] transition">Create
        New Solution
      </button>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      <NuxtLink to="/products" v-for="(card, index) in cards"
           :key="index"
           class="bg-white border border-[#C9CBD3] rounded-lg p-4 transition duration-500 hover:shadow-[0_2px_16px_0_rgba(0,0,0,0.16)]"
      >
        <div class="space-y-3">
          <div class="flex items-start gap-2 font-semibold">
            <nuxt-icon :name="card.icon" filled/>
            <h4>{{ card.title }}</h4>
          </div>

          <div class="flex text-xs font-bold">
            <div v-for="(tag, index) in card.tags"
                 :key="index"
                 class="py-0.5 px-2 bg-[#EAEAF1] rounded"
            >
              {{ tag }}
            </div>
          </div>

          <div class="text-sm space-y-2">
            <p>{{ card.message }}</p>
            <p class="text-[#535768]">{{ card.sub }}</p>
          </div>

        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>