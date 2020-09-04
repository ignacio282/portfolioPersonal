import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import './assets/css/app.scss';
import vuetify from './plugins/vuetify';




Vue.component('NavigationDrawer',require('./components/NavigationDrawer.vue').default);
Vue.component('TarjetaProyecto',require('./components/TarjetaProyecto.vue').default);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
