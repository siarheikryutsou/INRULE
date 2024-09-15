<template>
  <header class="bg-[#252E43] py-2.5 px-3 flex text-white items-center">
    <div class="w-[238px]">
      <NuxtLink to="/">
        <nuxt-icon name="logo" filled/>
      </NuxtLink>
    </div>

    <div class="flex flex-grow items-center justify-between">
      <div class="flex gap-2">
        <div class="flex items-center gap-2 font-medium">
          <nuxt-icon name="inbox" filled/>
          <span>Inbox</span>
        </div>
        <div>
          <div class="px-2 bg-[#2E465D] rounded flex items-center gap-2 py-1.5">
            <nuxt-icon name="solutions" filled/>
            <span>Solutions</span>
          </div>
        </div>
      </div>

      <div class="relative">
        <nuxt-icon name="search" class="absolute top-2 left-2" filled/>
        <input class="min-w-[425px] placeholder-white py-2 pl-9 pr-3 rounded bg-[#0E121B]" type="search" placeholder="Search"/>
      </div>

      <div class="flex items-center justify-between gap-3.5">
        <div>
          <button class="flex items-center justify-center gap-1">
            <nuxt-icon name="help" filled/>
            <span class="font-medium text-sm">Help</span>
          </button>
        </div>
        <nuxt-icon name="avatar" filled/>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
</script>