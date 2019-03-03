import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import Login from '@/components/Login'

Vue.use(Router);

 const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});

 // 路由守卫

// 假Token
const eleToken = "Bearer jfjeo40jvvovnvioow";
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path === "/login" || to.path === "/register") {
    next()
  } else {
    isLogin ? next() : next('/login');
  }
});

export default router
