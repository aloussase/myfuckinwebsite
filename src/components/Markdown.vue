<script setup>
import MarkdownIt from "markdown-it";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import hljs from "highlight.js";
import "highlight.js/styles/qtcreator-dark.css";

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

<style>
ul,
li {
  list-style: inside;
}

h1 {
  font-size: 1.3rem;
  font-weight: bold;
  padding-top: 1rem;
}

h2 {
  font-size: 1.1rem;
  font-weight: bold;
  padding-top: 1rem;
}

p {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

a {
  color: blue;
  /* text-decoration: underline; */
}
</style>
