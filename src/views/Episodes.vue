<template>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <SeasonList :groupedEpisodes="groupedEpisodes"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import SeasonList from '../components/SeasonList.vue';

export default {
  components: {
    SeasonList,
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
    ...mapGetters({
      groupedEpisodes: 'groupEpisodesBySeasons',
    }),
  },
  mounted() {
    this.tvShow = this.findShow(this.id) || {};
    this.selectShow(this.id);

    const component = this;
    this.$store.dispatch({
      type: 'fetchEpisodes',
      id: this.id,
    }).then(() => {
      component.$data.isLoading = false;
    });
  },
  methods: {
    ...mapMutations(['selectShow']),
  },
};
</script>
