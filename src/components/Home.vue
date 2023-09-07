<script setup>
import { ref, inject } from "vue";

import PostPreview from "./PostPreview.vue";
import NiceButton from "./NiceButton.vue";

const postService = inject("services.posts");
const authService = inject("services.auth");

const posts = ref([]);

posts.value = await postService.findAll();
</script>

<template>
  <div class="container mx-auto w-full p-2 md:p-4">
    <h1>Blog Posts</h1>
    <div class="action-buttons flex">
      <span v-if="authService.user !== null">
        <router-link to="/posts/new" class="text-blue-400 text-xs underline">
          <NiceButton text="Crear un post" />
        </router-link>
      </span>
    </div>
    <div v-for="post of posts" v-bind:key="post.id">
      <post-preview v-bind="post" />
    </div>
  </div>
</template>
