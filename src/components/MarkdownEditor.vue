<script setup>
import { VAceEditor } from "vue3-ace-editor";
import { computed } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const editorOptions = {
  showLineNumbers: false,
  showGutter: false,
  fontSize: "1rem",
  minLines: 20,
  maxLines: 20,
  keyboardHandler: "ace/keyboard/vim",
};
</script>

<template>
  <v-ace-editor
    class="border p-2"
    v-model:value="value"
    :options="editorOptions"
    lang="markdown"
  />
</template>
