<script setup>
import { defineProps, defineEmits } from "vue";

defineEmits(["click"]);

const props = defineProps({
  tag: {
    type: String,
    default: "button",
  },
  theme: {
    type: String,
    default: "",
  },
  path: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  click: {
    type: String,
    default: "",
  },
  textClasess: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <component
    :class="{
      ' underline hover:no-underline': tag === 'a',
      'inline-block bg-primary rounded-[.6rem] border-[.2rem] border-transparent no-underline text-bg hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-500':
        theme === 'primary',
    }"
    :is="tag"
    :to="{ name: path }"
    :href="link"
    @click="$emit('click')"
  >
    <span :class="textClasess">
      <slot name="default"></slot>
    </span>
  </component>
</template>
