<!-- Image.vue -->
<template>
  <img
    :src="src"
    :alt="alt"
    :style="{ width: imageWidth ? `${imageWidth}px !important` : 'auto', height: imageWidth ? `${imageWidth}px` : 'auto', maxWidth: imageWidth ? `${imageWidth}px` : '100%' }"
    :class="['object-cover', $attrs.class]"
  />
</template>

<script setup>
defineProps({
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
  },
});
</script>