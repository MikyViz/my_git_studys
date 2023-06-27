import Vue from 'vue';
import Router from 'vue-router';
import SignIn from './components/SignIn/SignIn.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    }
  ]
});