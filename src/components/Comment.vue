<script setup>
defineProps(["comment", "createdAt"]);
</script>

<template>
  <div class="comment p-2 border rounded">
    <span class="text-xs text-gray-500"> By: Anonymous User </span>
    <p>{{ comment }}</p>
    <span class="text-xs text-gray-500">
      {{ createdAt }}
    </span>
  </div>
</template>
