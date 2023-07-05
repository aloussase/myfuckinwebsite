<script setup>
import { ref, inject } from "vue";

import PostPreview from "./PostPreview.vue";

const postService = inject("services.posts");
const posts = ref([]);

posts.value = await postService.findAll();
</script>

<template>
  <div class="container mx-auto w-2/3">
    <h1 class="text-center text-xl font-bold py-4">Welcome to My Blog!</h1>
    <div id="posts" v-for="post of posts" v-bind:key="post.id">
      <post-preview v-bind="post" />
    </div>
  </div>
</template>
