<template>
  <div class="hello">
    <ul>
      <li v-for="tvShow in tvShows">
        <router-link :to="{ name: 'episodes', params: { id: tvShow.id.toString() }}">
          <LazyImage
            :alt="tvShow.name"
            :src="tvShow.image.medium"
            :width="180"
            :height="252"
          />
        </router-link>
      </li>
      <p v-observe-visibility="intersectionOptions()">END</p>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LazyImage from '@/components/molecules/LazyImage/index.vue';

export default {
  name: 'HelloWorld',
  components: {
    LazyImage,
  },
  computed: {
    ...mapState(['tvShows']),
  },
  methods: {
    intersectionOptions() {
      return {
        callback: (isVisible) => {
          if (isVisible) {
            this.$store.dispatch({
              type: 'getNextShowsBatch',
            });
          }
        },
        throttle: 1000,
        threshold: 1,
      };
    },
  },
};
</script>

<style scoped="true">
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}
a {
  color: #42b983;
}
li {
  display: inline-block;
}
</style>
