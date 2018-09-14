<template>
  <fade-transition>
    <div sticky-container>
      <div>
        <div
          id="tv-top"
          v-sticky sticky-offset="offset" sticky-side="top"
          class="nav horizontal-scroll"
        >
          <span
            v-for="(seasonNumber) in seasonNumbers"
            :key="seasonNumber"
            :id="navName(seasonNumber)"
            :class="isSelected(seasonNumber)"
            :ref="navName(seasonNumber)"
            class="nav-item horizontal-scroll-item"
          >
            <a
              :href="anchoredSeasonName(seasonNumber)"
              @click="scrollTo(seasonNumber)"
            >
              Season {{ seasonNumber }}
            </a>
            &nbsp;
          </span>
        </div>
      </div>
      <div
        v-for="(episodes, seasonNumber) in groupedEpisodes"
        :key="seasonNumber"
      >
          <h2
            :id="seasonName(seasonNumber)"
            class='heading'
            v-observe-visibility="intersectionOptions(seasonNumber)"
          >
            <a :href="anchoredSeasonName(seasonNumber)">Season {{ seasonNumber }}</a>
          </h2>
        <SeasonListItem :episodes="episodes" />
      </div>
    </div>
  </fade-transition>
</template>
<script>
import { FadeTransition } from 'vue2-transitions';
import SeasonListItem from './SeasonListItem.vue';
import { getScrollTop } from '../helpers';

export default {
  components: {
    FadeTransition,
    SeasonListItem,
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
    noSelectedNav() {
      return this.selectedNav.length === 0;
    },
  },
  watch: {
    selectedNav(newValue) {
      if (newValue.length === 0) {
        return;
      }
      this.$refs[newValue][0].scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    },
  },
  methods: {
    isSelected(seasonNumber) {
      const shouldSelectFirst = this.noSelectedNav && seasonNumber === this.seasonNumbers[0];
      if (shouldSelectFirst || this.selectedNav === this.navName(seasonNumber)) {
        return 'selected';
      }
      return '';
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
          rootMargin: '-20% 0px -50%',
        },
        threshold: 0.5,
      };
    },
  },
};
</script>
<style>
.horizontal-scroll {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
}
.horizontal-scroll-item {
  display: inline-block;
  scroll-snap-align: center;
  position: relative;
}

.nav {
  background: white;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  padding: 8px;
}

.nav-item {
  -webkit-transition: background-color 0.3s ease-out;
  -moz-transition: background-color 0.3s ease-out;
  -o-transition: background-color 0.3s ease-out;
  transition: background-color 0.3s ease-out;
  padding: 4px 6px;
  border-radius: 8px;
}

.nav-item.selected {
  background-color: #383838;
}

.nav-item.selected a {
  color: white !important;
}

.heading {
  font-weight: bold;
  padding: 16px 8px 8px 16px;
}
</style>
