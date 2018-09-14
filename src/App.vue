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
@import 'reset-css';

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  a {
    text-decoration: none;
    color: #383838;
  }
}
</style>
