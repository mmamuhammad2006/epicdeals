import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';

const authPage = (page) => {
    return () => import(`../pages/auth/${page}.vue`);
}
const loadPage = (page) => {
    return () => import(`../pages/${page}.vue`);
}
// Define custom routes

const customRoutes = [
    {
        path: '/', name: 'home', component: loadPage('Home'), meta: { layout: 'App' }
    },
    {
        path: '/login', name: 'login', component: authPage('Login')
    },
    {
        path: '/register', name: 'register', component: authPage('Register')
    },
    {
        path: '/cart', name: 'add-to-cart', component: loadPage('Cart'), meta: { layout: 'App' }
    },
    {
        path: '/wishlist', name: 'items-wishlist', component: loadPage('Wishlist'), meta: { layout: 'App' }
    },
    {
        path: '/details', name: 'item-details', component: loadPage('Details'), meta: { layout: 'App' }
    },
    
]

// const routes = [...customRoutes,...setupLayouts(generatedRoutes)];
const routes = setupLayouts(customRoutes);

const router = createRouter({
    history: createWebHistory(),
    // routes,
    routes: routes 
});

export default router;