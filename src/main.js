import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify'
import App from './App.vue';
import Message from './Message.vue';
import Cities from './cities.vue';
import Vuetif from './Vuetif.vue';
import 'vuetify/dist/vuetify.min.css'

//import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.component('app-vuetif', Vuetif)
Vue.component('app-message', Message);
Vue.component('app-cities', Cities)

new Vue({
  el: '#app',
  render: h => h(App)
})
