<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li
        v-for="tvShow in tvShows"
        :key="tvShow.id"
      >
        <router-link :to="{ name: 'episodes', params: { id: tvShow.id.toString() }}">
          <img :alt="tvShow.name" :src="tvShow.image.medium">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    ...mapState(['tvShows']),
  },
  created() {
    this.$store.dispatch({
      type: 'listShows',
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
