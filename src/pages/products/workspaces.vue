<script setup lang="ts">
definePageMeta({
  layout: "products"
})

const tableContent = [
  {name: "Text", modifyBy: "First Last", date: "1 day ago"},
  {name: "Text", modifyBy: "First Last", date: "1 day ago"},
  {name: "Text", modifyBy: "First Last", date: "1 day ago"},
  {name: "Text", modifyBy: "First Last", date: "1 day ago"},
  {name: "Text", modifyBy: "First Last", date: "1 day ago"},
  {name: "Text", modifyBy: "First Last", date: "1 day ago"},
  {name: "Text", modifyBy: "First Last", date: "1 day ago"},
  {name: "Text", modifyBy: "First Last", date: "1 day ago"},
  {name: "Text", modifyBy: "First Last", date: "1 day ago"},
  {name: "Text", modifyBy: "First Last", date: "1 day ago"},
];

</script>

<template>
  <section class="p-10 w-full">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold">Workspaces</h2>
      <div class="flex items-center justify-between gap-3">
        <button class="rounded p-1.5 border border-[#C9CBD3]">
          <nuxt-icon name="dots" filled/>
        </button>
        <button
            class="flex items-center text-white px-3 py-1.5 text-sm gap-1 font-medium rounded bg-[#252E43] hover:bg-[#385aa8] duration-300">
          <nuxt-icon name="plus" filled/>
          <span>New</span>
        </button>
      </div>
    </div>
    <table class="w-full mt-3 text-sm">
      <thead>
      <tr class="border-y border-[#EAEAF1] text-left font-medium text-[#7F828D] [&>*]:py-2.5 [&>*]:px-4">
        <th>NAME</th>
        <th class="w-[200px]">MODIFY BY</th>
        <th class="w-[200px]">DATE MODIFIED</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in tableContent"
          :key="index"
          class="border-y border-[#EAEAF1] [&>*]:py-2.5 [&>*]:px-4 cursor-pointer hover:bg-[#f2f2f2] hover:duration-300 duration-1000"
          role="button"
          @click="() => navigateTo('/workspace')"
      >
        <td>{{ row.name }}</td>
        <td>
          <div class="flex items-center gap-2">
            <nuxt-icon name="avatar_sm" filled/>
            <span>{{ row.modifyBy }}</span>
          </div>
        </td>
        <td>{{ row.date }}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>
