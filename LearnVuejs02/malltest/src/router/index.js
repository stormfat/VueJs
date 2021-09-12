import { createRouter, createWebHistory } from 'vue-router';
import Vue from 'vue';

const Home = () => import('views/home/Home');
const Cart = () => import('views/cart/Cart');
const Category = () => import('views/category/Category');
const Profile = () => import('views/profile/Profile');

const routes = [
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
    { path: '/', redirect: '/home' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
