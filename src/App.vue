<script setup>
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <router-view></router-view>
        <app-footer />
      </div>
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>
