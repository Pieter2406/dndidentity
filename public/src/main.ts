import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './styles/general.scss';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueNativeSock, 'ws://localhost:2406/connection', {
  format: 'json',
  store,
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
