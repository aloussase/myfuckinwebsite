<script setup>
import meJpeg from "../assets/me.jpeg";
</script>

<template>
  <nav
    class="flex flex-col h-screen p-4 py-8 justify-between bg-white text-black dark:bg-black dark:text-white"
  >
    <div class="flex flex-col items-center gap-4">
      <img
        :src="meJpeg"
        alt="me"
        class="rounded-full self-center border border-black hover:scale-105 transition"
        width="150"
      />
      <div class="flex flex-col items-center">
        <p>Alexander Goussas's Blog</p>
        <small>A blog about programming</small>
      </div>
      <router-link to="/">
        <span
          class="text-xl text-black dark:text-white hover:text-gray-600 font-bold no-underline"
        >
          Home
        </span>
      </router-link>
      <router-link to="/about">
        <span
          class="text-xl text-black dark:text-white hover:text-gray-600 font-bold no-underline"
        >
          About
        </span>
      </router-link>
    </div>
    <div class="flex gap-2 self-center">
      <a
        href="mailto:goussasalexander@gmail.com"
        class="text-black dark:text-white hover:text-gray-600 dark:hover:text-purple-600"
      >
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a
        href="https://github.com/aloussase"
        class="text-black dark:text-white hover:text-gray-600 dark:hover:text-purple-600"
      >
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  </nav>
</template>
