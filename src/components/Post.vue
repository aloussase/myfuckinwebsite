<script setup>
import { defineProps, inject } from "vue";
import Markdown from "./Markdown.vue";

const props = defineProps(["id"]);

const postService = inject("services.posts");

const post = await postService.getById(props.id);
</script>

<template>
  <div class="todo container mx-auto p-4 w-full md:w-2/3">
    <h1 class="post-title text-2xl text-center">{{ post.title }}</h1>
    <div class="post-meta container flex flex-col">
      <span class="text-xs text-gray-500">By: Alexander Goussas</span>
      <span class="text-xs text-gray-500">{{
        "Last updated: " + post.updatedAt
      }}</span>
    </div>
    <br />
    <div class="action-buttons flex gap-2">
      <router-link to="/" class="text-xs text-blue-400"> Go back </router-link>
      <router-link :to="`/posts/${id}/edit`" class="text-xs text-blue-400">
        Edit
      </router-link>
    </div>
    <markdown :content="post.content"></markdown>
  </div>
</template>
