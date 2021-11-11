import {createRouter, createWebHashHistory} from 'vue-router';
import Hindi from '../views/Hindi/Hindi.vue';
import Main from '../main';


const routes = [
  { path: '/', component: Main },
  { path: '/hindi', component: Hindi },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;