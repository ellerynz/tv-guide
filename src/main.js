import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import Sticky from 'vue-sticky-directive';
import VueObserveVisibility from 'vue-observe-visibility';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(Sticky);
Vue.use(VueObserveVisibility);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
