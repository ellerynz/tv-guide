<template>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <p>Foo {{ id }}</p>
    <EpisodesList :showId="id" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import EpisodesList from '../components/EpisodesList.vue';

export default {
  components: {
    EpisodesList,
  },
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
    ...mapMutations(['selectShow']),
  },
};
</script>
