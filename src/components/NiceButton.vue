<script setup lang="ts">
import { withDefaults, computed } from "vue";

export type NiceButtonKind = "link" | "destroy-action";

const props = withDefaults(
  defineProps<{
    text: string;
    kind?: NiceButtonKind;
  }>(),
  {
    kind: "link",
  }
);

const buttonKlass = computed(() => {
  const actsAsLink = props.kind === "link";
  const actsAsDestructiveAction = props.kind === "destroy-action";
  return {
    "bg-gray-700": actsAsLink,
    "hover:bg-gray-900": actsAsLink,
    "border-black": actsAsLink,
    "bg-red-400": actsAsDestructiveAction,
    "hover:bg-red-500": actsAsDestructiveAction,
    "border-red-600": actsAsDestructiveAction,
  };
});
</script>

<template>
  <button
    :class="buttonKlass"
    class="text-white p-1 text-sm rounded shadow-md w-fit border-b-2"
  >
    {{ text }}
  </button>
</template>
