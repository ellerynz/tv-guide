<template>
  <div>
    <div>
      <span v-for="seasonNumber in seasonNumbers">
        <a :href="'#' + seasonName(seasonNumber)">Season {{ seasonNumber }}</a>
        &nbsp;
      </span>
    </div>
    <div v-for="(episodes, seasonNumber) in groupedEpisodes">
      <h3 :id="seasonName(seasonNumber)">
        <a :href="'#' + seasonName(seasonNumber)">Season {{ seasonNumber }}</a>
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
  computed: {
    seasonNumbers() {
      return Object.keys(this.groupedEpisodes);
    },
  },
  methods: {
    seasonName(seasonNumber) {
      return `season-${seasonNumber}`;
    },
  },
};
</script>
