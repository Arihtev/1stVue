import Vue from 'vue';
import App from './App.vue';
import Message from './Message.vue';
import Cities from './cities.vue';
import VueResource from 'vue-resource';
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResource);
Vue.component('app-message', Message);
Vue.component('app-cities', Cities)

new Vue({
  el: '#app',
  render: h => h(App)
})
