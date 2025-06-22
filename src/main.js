import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css'; // 👈 esto aplica tu CSS global

createApp(App).use(router).mount('#app');
