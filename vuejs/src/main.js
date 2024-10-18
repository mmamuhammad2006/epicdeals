// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/web';

// importing components
import login from './components/auth/Login.vue';
import register from './components/auth/Register.vue';
import headerFile from './partials/header.vue';
import footerFile from './partials/footer.vue';


const app = createApp(App);
app.component('login',login)
.component('register',register)
.component('headerFile',headerFile)
.component('footerFile',footerFile);
app.use(router);
app.mount('#app');
