<script setup>
import { ref, inject } from "vue";

import PostPreview from "./PostPreview.vue";

const postService = inject("services.posts");
const authService = inject("services.auth");

const posts = ref([]);

posts.value = await postService.findAll();
</script>

<template>
  <div class="container mx-auto w-full md:w-2/3 p-2">
    <h1 class="text-center text-xl font-bold py-4">
      Welcome to My <span class="line-through">Fucking</span> Website!
    </h1>
    <div class="action-buttons flex">
      <span v-if="authService.user !== null">
        <router-link to="/posts/new" class="text-blue-400 text-xs underline">
          Crear un post
        </router-link>
      </span>
    </div>
    <div v-for="post of posts" v-bind:key="post.id">
      <post-preview v-bind="post" />
    </div>
  </div>
</template>
