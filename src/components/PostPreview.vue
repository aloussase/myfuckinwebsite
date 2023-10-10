<script setup>
import { defineProps } from "vue";

import NiceButton from "./NiceButton.vue";

defineProps(["id", "title", "content", "updatedAt"]);
</script>

<template>
  <div
    class="post-preview container flex flex-col p-4 my-2 border-2 border-solid rounded shadow"
  >
    <span class="font-bold text-lg">{{ title }}</span>
    <span class="text-xs text-gray-500">{{
      "Last updated: " + updatedAt
    }}</span>
    <span class="my-2">{{ content.substring(0, 69) + "..." }}</span>
    <router-link class="w-fit" :to="`/posts/${id}`">
      <NiceButton text="Read more" />
    </router-link>
  </div>
</template>
