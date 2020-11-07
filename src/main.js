import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/css/mdb.min.css';

import '@/assets/fonts/flaticon/flaticon.css';

import VueSplide from '@splidejs/vue-splide';
import VuePhotoSwipe from 'vue-photoswipe';

import Vue from 'vue';
import App from './app/App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueSplide);
Vue.use(VuePhotoSwipe);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
