<script setup lang="ts">
const menuItems = [
  {title: "Overview", link: "/products", icon: "aside_products_home"},
  {title: "Process Flows", link: "/products/flows", icon: "aside_products_process"},
  {title: "KPI", link: "/products/kpi", icon: "aside_products_kpi"},
  {title: "Entities", link: "/products/entities", icon: "aside_products_entities"},
  {title: "Data", link: "/products/data", icon: "aside_products_data"},
  {title: "Forms", link: "/products/forms", icon: "aside_products_forms"},
  {title: "Simulations", link: "/products/simulations", icon: "aside_products_simulations"},
  {title: "Orchestration Flows", link: "/products/orchestration-flows", icon: "aside_products_orchestrations"},
  {title: "Workspaces", link: "/products/workspaces", icon: "aside_products_workspaces"},
  {title: "Settings", link: "/products/settings", icon: "aside_products_settings"},
];
</script>

<template>
  <div class="flex py-4 w-full">
    <AppSidenav title="Loan products" :items="menuItems"/>
    <div class="w-full h-full rounded-l-lg border-l border-y border-[#D2D3D8] bg-white">
      <NuxtPage />
    </div>
  </div>
</template>
