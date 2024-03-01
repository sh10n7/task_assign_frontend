import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue';
import TopComp from '../components/Top.vue';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/top',
    name: 'TopComp',
    component: TopComp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;