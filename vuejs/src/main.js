// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import testRoute from './routes/authRoutes/loginRoute.js';

// importing components
import login from './components/auth/login.vue';

const app = createApp(App);
app.component('login',login);
app.use(testRoute);
app.mount('#app');
// createApp(App).use(testRoute).mount('#app')
