<template>
  <div
    id="tv-top"
    v-sticky sticky-offset="offset" sticky-side="top"
    class="nav horizontal-scroll"
  >
    <NavBarItem
      v-for="({ id, navigateTo, linkText, selected, num }) in navItems"
      :key="id"
      :id="id"
      :class="{ selected }"
      :ref="id"
      :href="navigateTo"
      @click="() => onNavItemClick(num)"
    >
      {{ linkText }}
    </NavBarItem>
  </div>
</template>
<script>
import NavBarItem from '../../atoms/NavBarItem/index.vue';

export default {
  name: 'NavBarList',
  components: {
    NavBarItem,
  },
  props: {
    navItems: Array,
    onNavItemClick: Function,
  },
  watch: {
    navItems(newValue) {
      if (newValue.length === 0) {
        return;
      }
      const { id } = newValue.find(navItem => navItem.selected);

      if (id) {
        // Get the DOM node from the $ref and scroll to it
        this.$nextTick(() => {
          this.$refs[id][0].$el.scrollIntoView({
            behavior: 'smooth',
            inline: 'end',
          });
        });
      }
    },
  },
};
</script>
<style scoped="true">
.nav {
  background: white;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  padding: 8px;
}

.horizontal-scroll {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
}
</style>
