<script setup>
import { ref, inject, computed } from "vue";
import { useRouter } from "vue-router";

import MarkdownEditor from "./MarkdownEditor.vue";
import Markdown from "./Markdown.vue";
import "../markdown.css";

const router = useRouter();

const postService = inject("services.posts");

const title = ref("");
const content = ref("");

const fullContents = computed(() => `# ${title.value}\n${content.value}`);

async function onSubmit() {
  await postService.create({
    title: title.value,
    content: content.value,
  });
  router.back();
}
</script>

<template>
  <div class="p-2 md:p-4 w-full container mx-auto flex flex-col gap-1">
    <h1>New Post</h1>
    <div class="flex gap-4">
      <form class="flex flex-col gap-1 flex-1" @submit.prevent="onSubmit">
        <input
          class="border p-1"
          type="text"
          placeholder="A cool title"
          v-model="title"
        />
        <markdown-editor v-model="content" />
        <input
          type="submit"
          value="Create"
          class="bg-blue-400 hover:bg-blue-500 p-2 rounded text-white cursor-pointer"
        />
      </form>
      <markdown class="flex-1" :content="fullContents"></markdown>
    </div>
  </div>
</template>
