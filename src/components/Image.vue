<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
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
  width: {
    type: [Number, String],
    default: null,
  },
  height: {
    type: [Number, String],
    default: null,
  },
  objectFit: {
    type: String,
    default: 'cover',
    validator: (value) => ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value),
  }
});
</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>