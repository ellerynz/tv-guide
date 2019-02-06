<template>
  <figure>
    <LazyImage
      :alt="name"
      :src="imageUrl"
      :width="250"
      :height="140"
    />
    <figcaption>
      <Heading :level="3">
        {{ name }}
      </Heading>
    </figcaption>
  </figure>
</template>
<script>
import Heading from '../../atoms/Heading/index.vue';
import LazyImage from '../LazyImage/index.vue';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
      default: () => '',
    },
  },
  components: {
    Heading,
    LazyImage,
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
  font-weight: bold;
  overflow: hidden;
  padding: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
