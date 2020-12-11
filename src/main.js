import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import '@/assets/css/main.css';
import '@/assets/css/common.scss';
import 'font-awesome/css/font-awesome.min.css';

const app = createApp(App);


app.use(router).use(store).mount('#app');
