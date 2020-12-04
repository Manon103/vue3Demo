import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/main.css';
import '@/assets/css/common.scss';
import 'font-awesome/css/font-awesome.min.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

createApp(App).use(mavonEditor)

createApp(App).use(router).use(store).mount('#app')
