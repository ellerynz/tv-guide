<template>
  <fade-transition>
    <div sticky-container>
      <div>
        <NavBarList
          :nav-items="navLinks"
          :onNavItemClick="scrollTo"
        />
      </div>
      <div
        v-for="(episodes, seasonNumber) in groupedEpisodes"
        :key="seasonNumber"
        v-observe-visibility="intersectionOptions(seasonNumber)"
      >
        <CardListHorizontal
          :name="seasonName(seasonNumber)"
          :navigateTo="anchoredSeasonName(seasonNumber)"
          :linkText="`Season ${seasonNumber}`"
          :episodes="episodes"
        />
      </div>
    </div>
  </fade-transition>
</template>
<script>
import { FadeTransition } from 'vue2-transitions';
import NavBarList from './molecules/NavBarList/index.vue';
import CardListHorizontal from './organisms/CardListHorizontal/index.vue';
import { getScrollTop } from '../helpers';

export default {
  components: {
    FadeTransition,
    CardListHorizontal,
    NavBarList,
  },
  data: () => ({
    isFixed: false,
    selectedNav: '',
    isTravellingByAnchor: false,
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
    navLinks() {
      return this.seasonNumbers.map(num => ({
        num,
        id: this.navName(num),
        name: this.seasonName(num),
        navigateTo: this.anchoredSeasonName(num),
        linkText: `Season ${num}`,
        selected: this.isSelected(num),
      }));
    },
    noSelectedNav() {
      return this.selectedNav.length === 0;
    },
  },
  methods: {
    isSelected(seasonNumber) {
      const shouldSelectFirst = this.noSelectedNav && seasonNumber === this.seasonNumbers[0];
      return shouldSelectFirst || this.selectedNav === this.navName(seasonNumber);
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
      this.isTravellingByAnchor = true;
      const component = this;
      this.$scrollTo(this.anchoredSeasonName(seasonNumber), 500, {
        onDone: () => {
          component.activateNav(seasonNumber);
          component.isTravellingByAnchor = false;
        },
      });
    },
    activateNav(seasonNumber) {
      this.selectedNav = this.navName(seasonNumber);
    },
    visibilityChanged(isVisible, entry, seasonNumber) {
      if (!isVisible || !entry.isIntersecting) {
        return;
      }
      if (getScrollTop() === 0) {
        this.activateNav(this.seasonNumbers[0]);
        return;
      }
      this.activateNav(seasonNumber);
    },
    intersectionOptions(seasonNumber) {
      return {
        callback: (isVisible, entry) => (
          this.visibilityChanged(isVisible, entry, seasonNumber)
        ),
        throttle: 50,
        intersection: {
          rootMargin: '-20% 0px -60%',
          threshold: 0.5,
        },
      };
    },
  },
};
</script>
