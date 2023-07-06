<script setup>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";

import MarkdownEditor from "./MarkdownEditor.vue";

const router = useRouter();

const postService = inject("services.posts");

const title = ref("");
const content = ref("");

async function onSubmit() {
  await postService.create({
    title: title.value,
    content: content.value,
  });
  router.back();
}
</script>

<template>
  <div class="p-2 w-full md:w-2/3 container mx-auto flex flex-col gap-1">
    <h1>New Post</h1>
    <form class="flex flex-col gap-1" @submit.prevent="onSubmit">
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
  </div>
</template>
