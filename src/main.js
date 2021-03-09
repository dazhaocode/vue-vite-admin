import { createApp } from 'vue'
import router from "./router/index"
import store from "./store/index"
import App from './App.vue'
import message from './components/message/index'
import "./assets/styles/index.scss"

const app = createApp(App).use(router).use(store).use(message).mount('#app');

console.log(app);
//app.$message({ show: true, text: "test" })