<template>
  <figure>
    <img :src="imageUrl" />
    <figcaption>
      <h3>{{ name }}</h3>
    </figcaption>
  </figure>
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
<style scoped="true">
figure {
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  overflow: hidden;
  margin: 16px 4px;
  width: 250px;
  background-color: white;
}
h3 {
  padding: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}
</style>
