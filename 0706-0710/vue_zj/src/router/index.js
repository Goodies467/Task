import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Users from '../components/system/user/UsersTable.vue'
import UsersForm from '../components/system/user/UsersForm.vue'
import Group from '../components/system/group/Group.vue'
import Audit from '../components/system/audit/Audit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',//去掉路径中的#
  routes: [
    //路由重定向，让用户打开就是登陆界面
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home', component: Home,
      //拦截器1
      //给需要拦截登录的页面的路由上加一个meta
      meta: {loginRequest: true},

      // 拦截器2
      // 添加钩子函数，
      beforeEnter: ((to, from, next) => {//to:即将要进入的目标，路由对象；from：当前导航正要离开的路由；next:调用next()进行管道中的下一个钩子
        if (to.meta.loginRequest) {
          if (localStorage.getItem('user')) {
            next() 
          } else {//否则跳入登录页，并记住要跳入的页面，以便登录完成后直接进入该页面
            next({
              path: '/login',
              query: {
                redirect: to.fullPath//把要跳转的页面路径作为参数传到登录页面
              }
            })
          }
        } else {
          next()//直接进入页面
        }

      }),

      redirect: '/users',
      children: [
        { path: '/users', component: Users, meta: { loginRequest: true }, 
        children:[{path:'/usersForm',component:UsersForm,meta: { loginRequest: true },}]
      },
        { path: '/group', component: Group, meta: { loginRequest: true }, },
        { path: '/audit', component: Audit, meta: { loginRequest: true }, },
      ]
    }

  ]

})




