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
  <div
    class="container mx-auto w-full p-2 md:p-4 bg-white text-black dark:bg-black dark:text-white"
  >
    <header>
      <div class="flex justify-between">
        <h3>{{ "Alexander Goussas".toUpperCase() }}</h3>
        <div class="flex gap-2">
          <a href="https://github.com/aloussase/">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://youtube.com/@aloussase/">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <h1>{{ "A blog about programming".toUpperCase() }}</h1>
    </header>
    <main>
      <section class="flex flex-col md:flex-row md:gap-4 justify-center w-full">
        <div class="flex-1">
          <h2>whoami</h2>
          <p>
            Hi there! My name is Alexander Goussas. I am a Computer Engineering
            undergraduate passionate about all things programming (except AI).
          </p>
        </div>
        <div class="flex-1">
          <h2>Projects</h2>
          <p>
            I am currently working on
            <a href="https://github.com/aloussase/gaya">Gaya</a>, a toy
            interpreted language made for solving Advent of Code problems. I
            also recently started to develop a taste for graphical applications,
            so I decided to learn Flutter.
          </p>
        </div>
      </section>
      <h2 class="font-bold">Blog Posts</h2>
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
    </main>
  </div>
</template>
