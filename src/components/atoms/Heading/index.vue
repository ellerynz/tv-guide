<template>
  <component :is="type">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  computed: {
    type() {
      return `h${this.level}`;
    },
  },
};
</script>

<style scoped="true">
h1 {
  font-size: 24px;
}
h2 {
  font-size: 20px;
}
h3 {
  font-size: 16px;
}
h4 {
  font-size: 12px;
}
</style>
