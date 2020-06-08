import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫 控制页面访问权限
router.beforeEach((to, from, next) => {
//  to 将要访问的路径
//  from 从哪个路径跳转而来
//  next 是一个函数，表示放行
//  第一种 next（） 放行    第二种 next（'/login'） 强制跳转
  if (to.path === '/login') return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
