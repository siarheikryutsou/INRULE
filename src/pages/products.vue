<script setup lang="ts">
const documentations = [
  {
    img: "doc_01.png",
    title: "How to add humans to your automations",
    description: "integrating a new employee with a company and its culture, tools etc.",
    time: "9m"
  },
  {
    img: "doc_02.png",
    title: "How to add humans to your automations",
    description: "integrating a new employee with a company and its culture, tools etc.",
    time: "9m"
  },
];

const related = [
  {icon: "card_icon_04", title:"Onboarding", text:"integrating a new employee with a company and its culture, tools etc."},
  {icon: "card_icon_04", title:"Onboarding", text:"integrating a new employee with a company and its culture, tools etc."},
  {icon: "card_icon_04", title:"Onboarding", text:"integrating a new employee with a company and its culture, tools etc."},
];

</script>

<template>
  <div class="w-full h-full rounded-l-lg border-l border-y border-[#D2D3D8] bg-white">
    <section class="p-10">
      <div class="flex gap-7 items-start flex-col lg:flex-row">
        <div class="order-1 lg:order-none">
          <nuxt-icon name="product-icon" filled/>
        </div>
        <div class="w-full">
          <div class="flex items-start justify-between flex-wrap">
            <div class="flex items-center gap-5">
              <h2 class="text-2xl font-semibold">Loan products</h2>
              <span class="px-4 py-1.5 bg-[#D9D9D9] rounded">Category</span>
            </div>
            <button class="text-white px-3 py-1 text-xl font-medium rounded bg-[#252E43] hover:bg-[#385aa8]">Actions
            </button>
          </div>

          <p class="mt-4">Designed for our team, [App Name] streamlines the process of managing loan products. Easily
            track, update,
            and manage loan applications and approvals all in one place.</p>

          <div class="mt-6 space-y-0.5 [&>*]:flex [&>*]:flex-wrap">
            <div>
              <strong class="min-w-[100px]">Modified by</strong>
              <span class="mr-5 text-[#5F5F5F]">2024-08-23, 04:56 PM</span>
              <a href="mailto:tim.jennings@example.com">tim.jennings@example.com</a>
            </div>
            <div>
              <strong class="min-w-[100px]">Ceated by</strong>
              <span class="mr-5 text-[#5F5F5F]">2024-09-30, 04:56 PM</span>
              <a href="mailto:tim.jennings@example.com">tim.jennings@example.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16">
        <h3 class="text-xl font-medium mb-4">Documentation</h3>
        <div class="flex flex-wrap gap-5">
          <div
              v-for="(item, index) in documentations"
              :key="index"
              class="w-[292px]"
          >
            <div class="h-[160px] bg-[#F5F5F8] rounded-t-lg overflow-hidden">
              <img class="object-cover w-full h-full" :src="item.img" alt="">
            </div>
            <div class="p-4 pt-7 space-y-2 border-[#C9CBD3] border-x border-b rounded-b-lg">
              <h4 class="font-semibold">{{ item.title }}</h4>
              <p class="text-sm">{{ item.description }}</p>
              <p class="text-sm text-[#535768]">{{ item.time }} read</p>
            </div>

          </div>
        </div>
      </div>

      <div class="mt-5">
        <h3 class="text-xl font-medium mb-4">Related Solutions</h3>
        <div class="flex flex-wrap gap-5">
          <div
              v-for="(item, index) in related"
              :key="index"
              class="w-[292px] rounded border border-[#C9CBD3] p-4"
          >
            <nuxt-icon :name="item.icon" filled/>
            <h4 class="font-semibold mt-3 mb-2">{{ item.title }}</h4>
            <p class="text-sm">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
