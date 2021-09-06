import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from "../components/Home";
// import About from "../components/About";
// import Test from "../components/Test";
// import User from "../components/User";
//懒加载的写法 懒加载：当路由被需要时加载，以后的常规写法。
const Home = () => import('../components/Home');
const About = () => import('../components/About');
const Test = () => import('../components/Test');
const User = () => import('../components/User');
const HomeNews = () => import('../components/HomeNews');
const HomeMessages = () => import('../components/HomeMessages');
const Profile = () => import('../components/Profile');

Vue.use(VueRouter);

//配置路由信息
const routes= [
  //配置路由映射
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },

    beforeEnter:(to,from,next)=>{
    document.title=to.matched[0].meta.title
    next()},
    //嵌套路由,类似子页面功能实现
    children: [
      {
        path: '/',
        redirect: 'news',

      },
      {
        path: 'news',
        component: HomeNews,
        meta: {
          title: '新闻'
        },
        beforeEnter:(to,from,next)=>{
        document.title=to.matched[1].meta.title
        next()}
      },
      {
        path: 'messages',
        component: HomeMessages,
        meta: {
          title: '信息'
        },
        beforeEnter:(to,from,next)=>{
        document.title=to.matched[1].meta.title
        next()}
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/test',
    component: Test,
    meta: {
      title: '测试'
    }
  },
  {
    path: '/User/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

//创建路由实例
const router=new VueRouter({
routes,
mode:'history'})

//设置导航守卫(前置钩子)
router.beforeEach((to,from,next) =>{
document.title =to.matched[0].meta.title
next()})

//导出路由实例
export default router
