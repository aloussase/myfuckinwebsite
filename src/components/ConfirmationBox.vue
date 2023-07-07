<script setup>
defineProps(["title"]);
defineEmits(["confirm", "cancel"]);
</script>

<template>
  <div
    class="w-screen h-screen bg-gray-800 fixed top-0 left-0 opacity-80"
  ></div>
  <div
    class="flex flex-col gap-6 border shadow-md rounded p-4 items-center w-full md:w-1/3 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 fixed z-10 bg-white"
  >
    <span class="">{{ title }}</span>
    <div class="action-buttons flex gap-2 w-full">
      <button
        class="bg-blue-400 hover:bg-blue-500 text-white p-1 rounded flex-1"
        @click="$emit('confirm')"
      >
        Confirm
      </button>
      <button
        class="bg-red-500 hover:bg-red-600 text-white p-1 rounded flex-1"
        @click="$emit('cancel')"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
