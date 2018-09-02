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
            :id="navName(seasonNumber)"
            :key="seasonNumber"
            :class="isSelected(seasonNumber)"
            class="nav-item"
          >
            <a
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
        <h3
          :id="seasonName(seasonNumber)"
          v-observe-visibility="{
            callback: (isVisible, entry) => visibilityChanged(isVisible, entry, seasonNumber),
            throttle: 100,
          }"
        >
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
    selectedNav: '',
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
    isSelected(seasonNumber) {
      return this.selectedNav === this.navName(seasonNumber) ? 'selected' : '';
    },
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
    visibilityChanged(isVisible, entry, seasonNumber) {
      if (!isVisible) {
        return;
      }
      this.selectedNav = this.navName(seasonNumber);
    },
  },
};
</script>
<style>
.nav {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  background: white;
}

.nav-item {
  display: inline-block;
  -webkit-transition: background-color 0.3s ease-out;
  -moz-transition: background-color 0.3s ease-out;
  -o-transition: background-color 0.3s ease-out;
  transition: background-color 0.3s ease-out;
}

.nav-item.selected {
  background-color: salmon;
}
</style>
