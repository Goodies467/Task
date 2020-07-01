import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Login from '../views/Login'

import UserList from '../views/user/List'//从List中导入USerList
import UserProfile from '../views/user/Profile'//从Profile中导入USerProfile
import conList from '../views/content/conList'
import type from '../views/content/type'
import setting from '../views/system/setting'
import update from '../views/system/update'
import NotFound from '../views/NotFound'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[//routes是一个数组，里面放各种各样的路由
        {
            path:'/',//运行项目的默认界面（登录界面）
            component:Login
        },
        {
            // 请求main进入Main这个主页
            path:'/main/:name',
            component:Main,
            props:true,
            children:[
                {path:'/user/profile/:id',
                name:'UserProfile',
                component:UserProfile,
                props:true
            },
                {path:'/user/list',component:UserList}
            ]
        },
        {
            path:'/main/:name',
            component:Main,
            props:true,
            children:[
                {path:'/content/conList',component:conList},
                {path:'/content/type',component:type}
            ]
        },
        {
            path:'/main/:name',
            component:Main,
            props:true,
            children:[
                {path:'/system/setting',component:setting},
                {path:'/system/update',component:update}
            ]
        },
        {
            // 请求login进入Login这个主页
            path:'/login',
            component:Login
        },
        {
            path:'*',
            component:NotFound
        }
    ]
})