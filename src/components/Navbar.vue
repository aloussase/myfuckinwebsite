<script setup>
import meJpeg from "../assets/me.jpeg";
</script>

<template>
  <nav class="flex flex-col h-screen border-r-2 p-4 py-8 justify-between">
    <div class="flex flex-col items-center gap-4">
      <img
        :src="meJpeg"
        alt="me"
        class="rounded-full self-center border border-black hover:scale-105 transition"
        width="150"
      />
      <div class="flex flex-col items-center">
        <p>Alexander Goussas's Blog</p>
        <small style="margin-top: -10px">A blog about programming</small>
      </div>
      <router-link to="/">
        <span
          class="text-xl text-black hover:text-gray-600 font-bold no-underline"
        >
          Home
        </span>
      </router-link>
      <router-link to="/about">
        <span
          class="text-xl text-black hover:text-gray-600 font-bold no-underline"
        >
          About
        </span>
      </router-link>
    </div>
    <div class="flex gap-2 self-center">
      <a
        href="mailto:goussasalexander@gmail.com"
        class="text-black hover:text-gray-600"
      >
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a
        href="https://github.com/aloussase"
        class="text-black hover:text-gray-600"
      >
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  background-color: #f4f4f4;
  padding: 0.2rem;
  border-radius: 5px;
}
</style>
