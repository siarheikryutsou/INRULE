<script setup lang="ts">
import AppSidenav from "~/components/AppSidenav.vue";

const menuItems = [
  {title: "Decision Table 1", link: "/workspace", icon: "aside_ws_home"},
  {title: "Entities", link: "/products/entities", icon: "aside_ws_entities"},
  {title: "Data", link: "/products/data", icon: "aside_ws_data"},
  {title: "Forms", link: "/products/forms", icon: "aside_ws_forms"},
  {title: "Simulations", link: "/products/simulations", icon: "aside_ws_simulations"},
];
</script>

<template>
  <main class="flex h-full">
    <AppSidenav title="New Product Onboarding" :items="menuItems" :is-inner="true" />
    <div class="p-9 bg-[#F5F5F5] w-full flex justify-center items-start">
      <NuxtPage />
    </div>
  </main>
</template>
