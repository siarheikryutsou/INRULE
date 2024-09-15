<script setup lang="ts">
const items = [
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
  <aside class="w-[250px] min-w-[250px] px-6">
    <h3 class="font-semibold text-2xl mb-5 ml-2">Solutions</h3>
    <div class="space-y-[3px]">
      <NuxtLink v-for="(item, index) in items"
                :to="item.link"
                :key="index"
                class="flex gap-2.5 rounded bg-transparent hover:bg-[#E7E8EB] transition duration-300 px-2 py-0.5"
                activeClass="bg-white hover:bg-white"
      >
        <div class="w-5 flex items-center justify-center">
          <nuxt-icon :name="item.icon" filled/>
        </div>
        <span>{{ item.title }}</span>
      </NuxtLink>
    </div>

    <div class="my-4 border-t border-[#D9D9D9]"></div>

    <div class="space-y-[3px]">
      <NuxtLink v-for="(item, index) in customItems"
                :to="item.link"
                :key="index"
                class="flex gap-2.5 rounded bg-transparent hover:bg-[#E7E8EB] transition duration-300 px-2 py-0.5"
                activeClass="bg-white hover:bg-white"
      >
        <div class="w-5 flex items-center justify-center">
          <nuxt-icon :name="item.icon" filled/>
        </div>
        <span>{{ item.title }}</span>
      </NuxtLink>
    </div>
  </aside>
</template>