<script setup>
import { ref, inject, computed } from "vue";
import { useRouter } from "vue-router";
import Markdown from "./Markdown.vue";

const props = defineProps(["id"]);

const postService = inject("services.posts");

const post = await postService.getById(props.id);

const postTitle = ref(post.title);
const postContent = ref(post.content);

const fullContents = computed(
  () => `# ${postTitle.value}\n` + postContent.value,
);

const router = useRouter();

async function onSubmit() {
  try {
    await postService.update(props.id, {
      title: postTitle.value,
      content: postContent.value,
    });
    router.back();
  } catch {
    // TODO: Alert the user of the error.
  }
}
</script>

<template>
  <div
    class="container w-full md:w-3/4 mx-auto p-2 items-center justify-center"
  >
    <h1 class="text-2xl py-2 text-center">Edit Post</h1>
    <div class="flex gap-10">
      <form @submit.prevent="onSubmit" class="flex flex-col gap-1 flex-1">
        <input class="border p-2" type="text" v-model="postTitle" />
        <textarea class="border p-2" v-model="postContent"></textarea>
        <input
          class="bg-blue-400 hover:bg-blue-500 text-white rounded p-2 cursor-pointer"
          type="submit"
          value="Update post"
        />
      </form>
      <markdown class="flex-1" :content="fullContents"></markdown>
    </div>
  </div>
</template>
