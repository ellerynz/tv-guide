<template>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <ul v-else>
    <fade-transition group>
      <li
        v-for="episode in episodes(showId)"
        :key="episode.id"
        style="display:inline;"
      >
        <EpisodeItem
          :id="episode.id"
          :name="episode.name"
          :season="episode.season"
          :summary="episode.summary"
          :imageUrl="episode.image.medium"
        />
      </li>
    </fade-transition>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex';
import { FadeTransition } from 'vue2-transitions';
import EpisodeItem from './EpisodeItem.vue';

export default {
  components: {
    FadeTransition,
    EpisodeItem,
  },
  data: () => ({
    isLoading: true,
  }),
  props: {
    showId: String,
  },
  computed: {
    ...mapGetters({
      episodes: 'getEpisodes',
    }),
  },
  mounted() {
    const component = this;
    this.$store.dispatch({
      type: 'fetchEpisodes',
      id: this.showId,
    }).then(() => {
      component.$data.isLoading = false;
    });
  },
};
</script>
