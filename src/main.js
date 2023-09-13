import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import  './styles/style.css'
import 'vue-toast-notification/dist/theme-bootstrap.css';
import ToastPlugin from 'vue-toast-notification';


const app = createApp(App)
app.use(ToastPlugin);
app.use(router)
app.mount('#app')
