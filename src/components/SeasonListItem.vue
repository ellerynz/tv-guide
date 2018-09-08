<template>
  <section>
    <div class="card-container">
      <div class="card-background"></div>
    </div>
    <EpisodesList :episodes="episodes" />
  </section>
</template>
<script>
import EpisodesList from './EpisodesList.vue';

export default {
  components: {
    EpisodesList,
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
.card-container {
  padding: 0px 8px;
  height: 100%;
  position: absolute;
  float: left;
  width: 100%;
}
.card-background {
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  height: 100%;
  width: 100%;
  border-radius: 8px;
}
section {
  position: relative;
  width: 100%;
}

</style>
