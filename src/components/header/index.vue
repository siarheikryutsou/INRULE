<template>
  <header class="bg-[#252E43] py-2.5 px-3 flex text-white items-center">
    <div class="md:w-[238px]">
      <NuxtLink to="/">
        <div class="hidden md:block">
          <nuxt-icon name="logo" filled/>
        </div>
        <img src="/favicon.svg" class="md:hidden w-[43px] h-[37px] mr-4" />
      </NuxtLink>
    </div>

    <div class="flex flex-grow items-center justify-between gap-4">
      <div class="flex gap-2">
        <div class="flex items-center gap-2 font-medium">
          <nuxt-icon name="inbox" filled/>
          <span>Inbox</span>
        </div>
        <div>
          <NuxtLink to="/" class="px-2 bg-[#2E465D] rounded flex items-center gap-2 py-1.5 hover:bg-[#305374] duration-300">
            <nuxt-icon name="solutions" filled/>
            <span>Solutions</span>
          </NuxtLink>
        </div>
      </div>

      <div class="relative">
        <nuxt-icon name="search" class="absolute top-3 left-2" filled/>
        <input class="w-full lg:min-w-[425px] placeholder-white py-2 pl-9 pr-3 rounded bg-[#0E121B]" type="search" placeholder="Search"/>
      </div>

      <div class="flex items-center justify-between gap-3.5">
        <div>
          <button class="flex items-center justify-center gap-1">
            <nuxt-icon name="help" filled/>
            <span class="font-medium text-sm">Help</span>
          </button>
        </div>
        <button>
          <nuxt-icon name="avatar" filled/>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
</script>