<script setup>
import { defineProps } from "vue";

defineProps(["id", "title", "content", "updatedAt"]);
</script>

<template>
  <div
    class="post-preview container flex flex-col p-2 m-2 border border-solid rounded"
  >
    <span class="font-bold text-lg">{{ title }}</span>
    <span class="text-xs text-gray-500">{{
      "Last updated: " + updatedAt
    }}</span>
    <span class="my-2">{{ content.substring(0, 30) + "..." }}</span>
    <router-link class="text-xs text-blue-400 underline" :to="`/posts/${id}`">
      Read more
    </router-link>
  </div>
</template>
