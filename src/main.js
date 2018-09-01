import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import Sticky from 'vue-sticky-directive';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(Sticky);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
