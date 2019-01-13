<template>
  <div>
    <div
      v-show="!hasLoaded"
      :style="dimensions"
      class="loading-image"
    >
    </div>
    <img
      v-lazy="src"
      :style="dimensions"
      :alt="alt"
      @load="onImageLoad"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    hasLoaded: false,
  }),
  props: {
    alt: {
      type: String,
      required: false,
      default: () => '',
    },
    src: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  computed: {
    dimensions() {
      return { width: `${this.width}px`, height: `${this.height}px` };
    },
  },
  methods: {
    onImageLoad() {
      this.hasLoaded = true;
    },
  },
};
</script>

<style scoped="true">
img[lazy=loaded] {
  opacity: 1;
  transition: opacity 0.3s;
}

img[lazy=error] {
  background-color: salmon;
  opacity: 1;
  transition: opacity 0.3s;
}

img[lazy=loading], .loading-image {
  background-color: aqua;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  padding: 12px;
  opacity: 0;
  margin: 0 auto;
}
</style>
