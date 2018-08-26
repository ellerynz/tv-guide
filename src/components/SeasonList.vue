<template>
  <div>
    <div v-for="(episodes, season) in groupedEpisodes">
      <h3 :id="seasonName(season)">
        <a :href="'#' + seasonName(season)">Season {{ season }}</a>
      </h3>
      <EpisodesList :episodes="episodes" />
    </div>
  </div>
</template>
<script>
import EpisodesList from './EpisodesList.vue';

export default {
  components: {
    EpisodesList,
  },
  props: {
    groupedEpisodes: {
      type: Object,
      required: true,
    },
  },
  methods: {
    seasonName(seasonNumber) {
      return `season-${seasonNumber}`;
    },
  },
};
</script>
