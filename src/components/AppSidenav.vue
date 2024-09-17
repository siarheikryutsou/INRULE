<script setup lang="ts">
type ISidenavItems = { title: string, link: string, icon: string }[];
defineProps<{ title: string, items: ISidenavItems, customItems?: ISidenavItems, isInner?: boolean }>();
</script>

<template>
  <aside class="w-[250px] min-w-[250px] px-6" :class="{ 'bg-[#0E4427] text-white py-3': isInner }">
    <div class="flex items-start gap-1">
      <nuxt-icon v-if="isInner" name="aside_inner_title" filled />
      <h3 class="font-semibold mb-5 ml-2" :class="isInner ? 'text-lg leading-5' : 'text-2xl'">{{ title }}</h3>
    </div>
    <div class="space-y-[3px]">
      <NuxtLink v-for="(item, index) in items"
                :to="item.link"
                :key="index"
                class="menu-item flex gap-2.5 rounded transition duration-300 px-2 py-0.5"
                :class="isInner ? 'hover:bg-[#6DCE20]' : 'hover:bg-[#E7E8EB]'"
                :activeClass="isInner ? 'bg-[#6DCE20] hover:bg-[#6DCE20] text-[#252E43]' : 'bg-white hover:bg-white'"
      >
        <div class="w-5 flex items-center justify-center">
          <nuxt-icon :name="item.icon" filled/>
        </div>
        <span>{{ item.title }}</span>
      </NuxtLink>
    </div>

    <div v-if="customItems?.length">
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
    </div>
  </aside>
</template>
