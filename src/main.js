import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Hindi from './views/Hindi/Hindi.vue';
import Turkish from './views/Turkish/Turkish.vue';
import Main from './views/Main.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false


const routes = [
  { path: '/polyglot/', component: Main },
  { path: '/polyglot/hindi', component: Hindi },
  { path: '/polyglot/Turkish', component: Turkish },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
