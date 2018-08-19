<template>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <p>Foo {{ id }}</p>
    <img :alt="tvShow.name" :src="imagePath()">
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data: () => ({
    isLoading: true,
    tvShow: {
      image: '',
    },
  }),
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(['findShow']),
  },
  mounted() {
    this.tvShow = this.findShow(this.id) || {};
    this.isLoading = false;
    this.selectShow(this.id);
  },
  methods: {
    imagePath() {
      const { image } = this.tvShow;
      return image && image.original;
    },
    ...mapMutations(['selectShow']),
  },
};
</script>
