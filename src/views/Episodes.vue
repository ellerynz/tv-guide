<template>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <SeasonList :groupedEpisodes="groupedEpisodes"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SeasonList from '../components/SeasonList.vue';

export default {
  components: {
    SeasonList,
  },
  data: () => ({
    isLoading: true,
  }),
  props: {
    id: String,
  },
  computed: {
    ...mapGetters({
      groupedEpisodes: 'groupEpisodesBySeasons',
    }),
  },
  mounted() {
    const component = this;

    this.$store.dispatch({
      type: 'findShow',
      id: this.id,
    }).then(() => {
      this.$store.dispatch({
        type: 'fetchEpisodes',
        id: this.id, // component.$props.id
      }).then(() => {
        component.$data.isLoading = false;
      });
    });
  },
};
</script>
