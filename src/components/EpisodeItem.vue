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
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
