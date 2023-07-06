<script setup>
import AppFooter from "./components/AppFooter.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <navbar />
        <router-view></router-view>
        <app-footer />
      </div>
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>
