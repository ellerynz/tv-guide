<template>
  <div id="app">
    <BackgroundHeader />
    <fade-transition>
      <router-view/>
    </fade-transition>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions';
import BackgroundHeader from './components/BackgroundHeader.vue';

export default {
  components: {
    FadeTransition,
    BackgroundHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
