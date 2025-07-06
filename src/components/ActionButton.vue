<template>
  <button :type="type" :formmethod="formmethod">{{ value }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    value: {
      type: [String, Number, Object],
      default: 'Button tekst...',
    },
    formmethod: {
      type: String,
      default: null,
    },
  },
};
</script>