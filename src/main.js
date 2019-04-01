import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify'
import App from './App.vue';
import Cities from './cities.vue';
import Stars from './Stars.vue';
import countryLeft from './C-Inf-Split/countryLeft.vue';
import countryRight from './C-Inf-Split/countryRight.vue';
import 'vuetify/dist/vuetify.min.css';

//import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.component('app-stars', Stars);
Vue.component('app-cities', Cities);
Vue.component('app-countryLeft', countryLeft);
Vue.component('app-countryRight', countryRight);

new Vue({
  el: '#app',
  render: h => h(App)
})
