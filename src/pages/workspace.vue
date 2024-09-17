<script setup lang="ts">
definePageMeta({
  layout: "workspace"
})
</script>

<template>
  <div class="max-w-[870px] p-4 bg-white flex-1 rounded-lg border border-[#E0E1E4] space-y-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <nuxt-icon name="excel" filled/>
        <h4 class="font-medium">Decision Table 1</h4>
        <div class="rounded-full text-xs bg-[#31A961] text-white px-2 py-0.5">Published</div>
      </div>
      <p class="text-xs text-[#484F61]">All changes are saved on InRule Process Automation</p>
    </div>
    <p class="text-sm text-[#535768]">Some optional object description goes here</p>
    <form @submit.prevent class="w-[340px] space-y-4">
      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <label for="target">Target</label>
          <div class="flex items-center gap-3">
            <button>
              <nuxt-icon name="revert" filled/>
            </button>
            <button title="Copy">
              <nuxt-icon name="copy" filled/>
            </button>
          </div>
        </div>
        <input class="py-2 px-3 border border-[#C4C5CC] rounded text-sm w-full outline-[#51A4C4]"
               placeholder="Field1" type="text"
               id="target" name="target"/>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <label for="target">Value</label>
          <div class="flex items-center gap-3">
            <button>
              <nuxt-icon name="revert" filled/>
            </button>
            <button title="Copy">
              <nuxt-icon name="copy" filled/>
            </button>
          </div>
        </div>
        <textarea class="py-2 px-3 border border-[#C4C5CC] rounded text-sm w-full outline-[#51A4C4]"
                  placeholder="GetAttribute"
                  type="text" id="target"
                  name="value"
                  rows="5"
        />
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>