<template>
  <ul>
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
  </ul>
</template>
<script>
import EpisodeItem from './EpisodeItem.vue';

export default {
  components: {
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
