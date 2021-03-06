// eslint-disable-next-line no-unused-vars
import IntersectionOberver from 'intersection-observer'; // Polyfill
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import Sticky from 'vue-sticky-directive';
import VueObserveVisibility from 'vue-observe-visibility';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  duration: 500,
  ease: 'ease-in',
  offset: -25,
});
Vue.use(Sticky);
Vue.use(VueObserveVisibility);
Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '0% 0% 10% 0%',
    threshold: 0.1,
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
