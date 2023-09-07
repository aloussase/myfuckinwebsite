<script setup>
import { ref } from "vue";

import AppFooter from "./components/AppFooter.vue";
import Navbar from "./components/Navbar.vue";

const navbarShowing = ref(true);
</script>

<template>
  <Suspense>
    <template #default>
      <div class="flex bg-white text-black dark:bg-black dark:text-white">
        <i
          class="fa-solid fa-bars border rounded p-1 w-fit h-fit fixed hover:bg-gray-200 cursor-pointer md:hidden"
          @click="navbarShowing = !navbarShowing"
        ></i>
        <navbar id="navbar" v-if="navbarShowing" class="md:w-1/4" />
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

<style scoped>
#navbar {
  animation-name: slidein;
  animation-duration: 0.8s;
}

@keyframes slidein {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
