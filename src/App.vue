<script setup>
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <div class="flex bg-white text-black">
        <div class="w-full h-screen overflow-y-auto">
          <router-view class="min-h-screen"></router-view>
          <app-footer />
        </div>
      </div>
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>
