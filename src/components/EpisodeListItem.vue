<template>
  <figure>
    <LazyImage
      :alt="name"
      :src="imageUrl"
      :width="250"
      :height="140"
    />
    <figcaption>
      <h3>{{ name }}</h3>
    </figcaption>
  </figure>
</template>
<script>
import LazyImage from './LazyImage.vue';

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
  components: {
    LazyImage,
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
