<template>
  <ul>
    <fade-transition group>
      <li
        v-for="episode in episodes"
        :key="episode.id"
        style="display:inline;"
      >
        <EpisodeItem
          :id="episode.id"
          :name="episode.name"
          :season="episode.season"
          :summary="episode.summary"
          :image="episode.image"
        />
      </li>
    </fade-transition>
  </ul>
</template>
<script>
import { FadeTransition } from 'vue2-transitions';
import EpisodeItem from './EpisodeItem.vue';

export default {
  components: {
    FadeTransition,
    EpisodeItem,
  },
  props: {
    episodes: {
      type: Array,
      required: true,
    },
  },
};
</script>
