<script setup>
import { inject } from "vue";

const authService = inject("services.auth");
</script>

<template>
  <nav class="flex w-full items-center justify-center py-2 gap-2">
    <router-link to="/" class="text-blue-400 underline text-sm">
      Home
    </router-link>
    <div v-if="authService.user === null">
      <router-link to="/login" class="text-blue-400 underline text-sm">
        Login
      </router-link>
    </div>
    <div v-else>
      <span
        class="text-blue-400 underline text-sm cursor-pointer"
        @click="authService.logout"
      >
        Logout
      </span>
    </div>
  </nav>
</template>
