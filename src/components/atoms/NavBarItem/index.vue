<template>
  <span
    :class="{ selected }"
    class="nav-item horizontal-scroll-item"
  >
    <a :href="href" @click="$emit('click', $event)">
      <slot></slot>
    </a>
    &nbsp;
  </span>
</template>
<script>
export default {
  name: 'NavBarItem',
  props: {
    selected: Boolean,
    href: String,
  },
};
</script>
<style scope="true">
.horizontal-scroll-item {
  display: inline-block;
  scroll-snap-align: center;
  position: relative;
}

.nav-item {
  -webkit-transition: background-color 0.3s ease-out;
  -moz-transition: background-color 0.3s ease-out;
  -o-transition: background-color 0.3s ease-out;
  transition: background-color 0.3s ease-out;
  padding: 4px 6px;
  border-radius: 8px;
  cursor: pointer;
}

.nav-item.selected {
  background-color: #383838;
}

.nav-item.selected a {
  color: white !important;
}
</style>
