// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/web';

// importing partials and auth components
import login from './components/auth/Login.vue';
import register from './components/auth/Register.vue';
import headerFile from './partials/header.vue';
import footerFile from './partials/footer.vue';

// importing components
import itemCard from './components/ItemCard.vue';
import HeroSection from './components/HeroSection.vue';
import HomeItemCard from './components/HomeItemCard.vue';

const app = createApp(App);
app.component('login',login)
.component('register',register)
.component('headerFile',headerFile)
.component('footerFile',footerFile)
.component('item-card',itemCard)
.component('hero-sction',HeroSection)
.component('home-item-card',HomeItemCard);
app.use(router);
app.mount('#app');
