<template>
  <fade-transition>
    <div>
      <div>
        <span
          v-for="seasonNumber in seasonNumbers"
          :key="seasonNumber"
        >
          <a
            :href="anchoredSeasonName(seasonNumber)"
            @click="scrollTo(anchoredSeasonName(seasonNumber))"
          >
            Season {{ seasonNumber }}
          </a>
          &nbsp;
        </span>
      </div>
      <div
        v-for="(episodes, seasonNumber) in groupedEpisodes"
        :key="seasonNumber"
      >
        <h3 :id="seasonName(seasonNumber)">
          <a :href="anchoredSeasonName(seasonNumber)">Season {{ seasonNumber }}</a>
        </h3>
        <EpisodesList :episodes="episodes" />
      </div>
    </div>
  </fade-transition>
</template>
<script>
import { FadeTransition } from 'vue2-transitions';
import EpisodesList from './EpisodesList.vue';

export default {
  components: {
    FadeTransition,
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
    anchoredSeasonName(seasonNumber) {
      return `#${this.seasonName(seasonNumber)}`;
    },
    scrollTo(elementSelector) {
      this.$scrollTo(elementSelector);
    },
  },
};
</script>
