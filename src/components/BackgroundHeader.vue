<template>
  <header
    id="nav"
    :style="{ backgroundImage }">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['selectedImageUrl']),
    backgroundImage() {
      if (this.selectedImageUrl.length) {
        return `url(${this.selectedImageUrl})`;
      }
      return 'none';
    },
  },
};
</script>

<style lang="scss">
#nav {
  text-align: center;
  padding: 30px;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-color: salmon;
  background-repeat: no-repeat;
  -webkit-transition:background-position 2s ease;
  transition:background-position 2s ease;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
