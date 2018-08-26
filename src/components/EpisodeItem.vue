<template>
  <div>
    <h3>{{ name }} <span>(S{{ season }})</span></h3>
    <img :src="imageUrl" />
    <div v-html="summary" />
  </div>
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
    season: {
      type: Number,
      required: true,
    },
    summary: {
      type: String,
      required: false,
      default: () => 'No summary available.',
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
