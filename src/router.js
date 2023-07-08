import {createRouter, createWebHistory} from 'vue-router';
import SignIn from '@/components/SignIn/SignIn';
import LogIn from '@/components/LogIn/LogIn.vue';

const routes = [
  {         
    path: "/",
    name: "SignIn",
    component: SignIn,
},
  { path: '/login', component: LogIn}
]

const VueRouter = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default VueRouter