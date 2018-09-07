<template>
  <span>
    <div>
      <img :src="imageUrl" />
      <h3>{{ name }}</h3>
    </div>
  </span>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  computed: {
    imageUrl() {
      return (this.image && this.image.medium) || '';
    },
  },
};
</script>
