<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  created() {
    this.resetShow();
  },
  methods: {
    ...mapMutations(['resetShow']),
  },
};
</script>
