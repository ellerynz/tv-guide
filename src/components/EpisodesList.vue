<template>
  <ul class="horizontal-scroll">
    <li
      v-for="episode in episodes"
      :key="episode.id"
      class="horizontal-scroll-item"
    >
      <EpisodeListItem
        :id="episode.id"
        :name="episode.name"
        :image="episode.image"
      />
    </li>
  </ul>
</template>
<script>
import EpisodeListItem from './EpisodeListItem.vue';

export default {
  components: {
    EpisodeListItem,
  },
  props: {
    episodes: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped="true">
li:first-child {
  padding-left: 12px;
}
li:last-child {
  padding-right: 12px;
}
</style>
