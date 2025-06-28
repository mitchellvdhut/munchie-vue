<template>
  <img
    :src="src"
    :alt="alt"
    :width="imageWidth"
  />
</template>

<script setup>

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  imageWidth: {
    type: [Number, String],
    default: null,
  }
});
</script>