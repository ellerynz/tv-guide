import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueLazyload from 'vue-lazyload';

Vue.use(Vuex);
Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '0% 0% 10% 0%',
    threshold: 0.1,
  },
});

const req = require.context("../src", true, /.stories.js$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
