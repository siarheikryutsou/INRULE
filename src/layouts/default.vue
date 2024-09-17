<script setup lang="ts">
import AppSidenav from "~/components/AppSidenav.vue";

const menuItems = [
  {title: "All solutions", link: "/", icon: "aside_home"},
  {title: "My", link: "/my", icon: "aside_my"},
  {title: "Favorites", link: "/favorites", icon: "aside_favorites"},
];
const customItems = [
  {title: "Jason Test Area", link: "/jason", icon: "aside_folder"},
  {title: "Tobias solutions", link: "/tobias", icon: "aside_folder"},
];
</script>

<template>
  <Header/>
  <main class="flex py-4">
    <AppSidenav title="Solutions" :items="menuItems" :customItems="customItems"/>
    <NuxtPage class="pr-3 pb-3"/>
  </main>
</template>
