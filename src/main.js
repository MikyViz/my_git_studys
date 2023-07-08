import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router';

const app = createApp(App);
app.use(VueRouter);
createApp(App).mount('#app')
