import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

const arr = Array(3).fill(Array(4).fill({}));
console.log(arr);
