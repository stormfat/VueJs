import { createRouter, createWebHistory } from 'vue-router';


const Home = () => import('views/home/Home');
const Cart = () => import('views/cart/Cart');
const Category = () => import('views/category/Category');
const Profile = () => import('views/profile/Profile');
const Detail = () => import('views/detail/Detail');

const routes = [
    {
        path: '/home',
        component: Home,
        name: 'Home',
        meta: {
            keepAlive: true //设置页面是否需要使用缓存
        }
    },
    { path: '/category', component: Category, name: 'Category', meta: { keepAlive: true } },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
    { path: '/', redirect: '/home' },
    { path: '/detail/:iid', component: Detail, name: 'Detail', meta: { keepAlive: false } }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
