<template>
  <fade-transition>
    <div sticky-container>
      <div>
        <div
          id="tv-top"
          v-sticky sticky-offset="offset" sticky-side="top"
          class="nav"
        >
          <span
            v-for="seasonNumber in seasonNumbers"
            :key="seasonNumber"
            class="nav-item"
          >
            <a
              :id="navName(seasonNumber)"
              :href="anchoredSeasonName(seasonNumber)"
              @click="scrollTo(seasonNumber)"
            >
              Season {{ seasonNumber }}
            </a>
            &nbsp;
          </span>
          <span>
            <a href="#tv-top" @click="scrollTo('#tv-top')">
              Back to top
            </a>
          </span>
        </div>
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
  data: () => ({
    isFixed: false,
  }),
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
    navName(seasonNumber) {
      return `${this.seasonName(seasonNumber)}-nav`;
    },
    scrollTo(seasonNumber) {
      this.$scrollTo(this.anchoredSeasonName(seasonNumber));
    },
  },
};
</script>
<style>
.nav {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  .nav-item {
    display: inline-block;
  }
}
</style>
