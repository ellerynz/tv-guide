<template>
  <div>
    <h2
      :id="name"
      class='heading'
    >
      <a :href="navigateTo">{{ linkText }}</a>
    </h2>
    <section>
      <div class="card-container">
        <div class="card-background"></div>
      </div>
      <ul class="horizontal-scroll">
        <li
          v-for="{ id, name, image} in episodes"
          :key="id"
          class="horizontal-scroll-item"
        >
          <Card
            :name="name"
            :imageUrl="imageUrl(image)"
          />
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import Card from '../../molecules/Card/index.vue';

export default {
  components: {
    Card,
  },
  props: {
    name: {
      type: String,
    },
    navigateTo: {
      type: String,
    },
    linkText: {
      type: String,
    },
    episodes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    imageUrl(image) {
      return (image && image.medium) || '';
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
.card-container {
  height: 100%;
  padding: 0px 8px;
  position: absolute;
  width: 100%;
}
.card-background {
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  height: 100%;
  width: 100%;
}
section {
  position: relative;
  width: 100%;
}
.horizontal-scroll {
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
}
.horizontal-scroll-item {
  display: inline-block;
  position: relative;
  scroll-snap-align: center;
}
.heading {
  font-weight: bold;
  padding: 16px 8px 8px 16px;
}
</style>
