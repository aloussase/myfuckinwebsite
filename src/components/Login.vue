<script setup>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";

import NiceButton from "./NiceButton.vue";

const authService = inject("services.auth");

const router = useRouter();

const errMsg = ref("");
const email = ref("");
const password = ref("");

async function onSubmit() {
  if (!email.value) {
    errMsg.value = "Please fill in the email field";
    return;
  }

  if (!password.value) {
    errMsg.value = "Please fill in the password field";
    return;
  }

  authService
    .signIn(email.value, password.value)
    .then(() => {
      const to = localStorage.getItem("route.to");
      if (to) {
        localStorage.removeItem("route.to");
        router.replace(JSON.parse(to));
      } else {
        router.back();
      }
    })
    .catch((err) => (errMsg.value = err.message));
}
</script>

<template>
  <div class="flex flex-col container mx-auto w-full p-2 md:w-2/3">
    <h1 class="text-center text-2xl py-2">Sign-in</h1>
    <small class="text-center text-xs text-gray-500">
      If you are not me, you probably shouldn't be here.
    </small>
    <div v-if="errMsg" class="bg-red-400 text-white rounded p-2">
      <span>{{ errMsg }}</span>
    </div>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-1">
      <label for="email">Email</label>
      <input
        id="email"
        class="border p-2"
        type="text"
        placeholder="somebody@email.com"
        required
        v-model="email"
      />
      <label for="password">Password</label>
      <input
        id="password"
        class="border p-2"
        type="password"
        required
        v-model="password"
      />
      <NiceButton text="Sign-in" class="w-full p-2" />
    </form>
  </div>
</template>
