<script setup>
import { useRouter } from "vue-router";
import { inject, ref } from "vue";

import Comment from "./Comment.vue";
import ConfirmationBox from "./ConfirmationBox.vue";
import Markdown from "./Markdown.vue";
import NiceButton from "./NiceButton.vue";

const props = defineProps(["id"]);

const router = useRouter();

const authService = inject("services.auth");
const postService = inject("services.posts");
const commentsService = inject("services.comments");

const confirmDelete = ref(false);

const post = await postService.getById(props.id);

const postComments = ref([]);
commentsService
  .commentsForPost(props.id)
  .then((comments) => (postComments.value = comments));

const newComment = ref("");

async function onNewComment() {
  if (newComment.value === "") {
    return;
  }

  commentsService
    .createCommentForPost(props.id, newComment.value)
    .then(() => commentsService.commentsForPost(props.id))
    .then((comments) => (postComments.value = comments))
    .then(() => (newComment.value = ""));
}

async function deletePost() {
  if (authService.user === null) {
    router.push("/login");
    return;
  }

  const ok = await postService.delete(props.id);
  if (ok) {
    router.replace("/");
  }
}
</script>

<template>
  <div class="todo container mx-auto p-4 w-full md:p-4">
    <confirmation-box
      v-if="confirmDelete"
      title="Are you sure you want to delete the post?"
      @cancel="confirmDelete = false"
      @confirm="deletePost"
    />
    <h1 class="post-title text-2xl text-center">{{ post.title }}</h1>
    <div class="post-meta container flex flex-col">
      <span class="text-xs text-gray-500">By: Alexander Goussas</span>
      <span class="text-xs text-gray-500">{{
        "Last updated: " + post.updatedAt
      }}</span>
    </div>
    <br />
    <div class="action-buttons flex gap-2 items-center">
      <router-link to="/" class="text-xs text-blue-400">
        <NiceButton text="Go back" />
      </router-link>
      <div v-if="authService.user !== null" class="flex items-center gap-2">
        <router-link :to="`/posts/${id}/edit`" class="text-xs text-blue-400">
          <NiceButton text="Edit" />
        </router-link>
        <NiceButton
          text="Delete"
          kind="destroy-action"
          @click="confirmDelete = true"
        />
      </div>
    </div>
    <markdown :content="post.content"></markdown>
    <div id="comments" class="mt-2 flex flex-col gap-2">
      <h2>Comments</h2>
      <form
        id="new-comment"
        class="flex flex-col md:flex-row gap-1"
        @submit.prevent="onNewComment"
      >
        <textarea
          class="border flex-1 p-1"
          placeholder="Nice post!"
          v-model="newComment"
        ></textarea>
        <NiceButton text="Comment" />
      </form>
      <comment
        v-for="comment of postComments"
        :key="comment.id"
        v-bind="comment"
      />
    </div>
  </div>
</template>
