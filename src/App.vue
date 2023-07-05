<script setup>
import Home from "./components/Home.vue";
</script>

<template>
  <Suspense>
    <router-view></router-view>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>
