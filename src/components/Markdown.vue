<script setup>
import MarkdownIt from "markdown-it";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

defineProps(["content"]);

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
}).use(MarkdownItHighlightjs, { hljs });
</script>

<template>
  <div v-html="markdown.render(content)"></div>
</template>
