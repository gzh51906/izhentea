import Vue from 'vue';

import Home from "../pages/Home.vue"
import Mine from "../pages/Mine.vue"
import Chayu from "../pages/Chayu.vue"
import Shopcart from "../pages/Shopcart.vue"
import Login from "../pages/Login.vue"
import livedetail from "../pages/livedetail.vue"

import goodsdetail from "../pages/goodsdetail.vue"

import pay from "../pages/pay.vue"
import addresslist from "../pages/addresslist.vue"
import address from "../pages/address.vue"



// 路由
// 1.引入路由
import VueRouter from 'vue-router';


// 2.安装（使用）路由
Vue.use(VueRouter);

// 3. 实例化router并配置参数
let router = new VueRouter({
    routes: [{
        // 当浏览器路径为/home时，渲染Home组件内容
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        // 当浏览器路径为/home时，渲染Mine组件内容
        name: 'mine',
        path: '/mine',
        component: Mine,
        meta: { requiresAuth: true }
    },
    {
        // 当浏览器路径为/chayu时，渲染Chayu组件内容
        name: 'chayu',
        path: '/chayu',
        component: Chayu
    },
    {
        // 当浏览器路径为/shopcart时，渲染Shopcart组件内容
        name: 'shopcart',
        path: '/shopcart',
        component: Shopcart,
        meta: { requiresAuth: true }
    }, {
        // 当浏览器路径为/livedetetail时，渲染livedetail组件内容
        name: 'livedetail',
        path: '/livedetail',
        component: livedetail
    }, {
        // 当浏览器路径为/goodsdetail时，渲染goodsdetail组件内容
        name: 'goodsdetail',
        path: '/goodsdetail',
        component: goodsdetail
    },
    {
        // 当浏览器路径为/，重定向到/home
        path: '/',
        redirect: { name: 'home' }
    }, {
        // 当浏览器路径为/home时，渲染Shopcart组件内容
        name: 'login',
        path: '/login',
        component: Login
    }, {
        // 当浏览器路径为/pay时，渲染pay组件内容
        name: 'pay',
        path: '/pay',
        component: pay
    }, {
        // 当浏览器路径为/addresslist时，渲染addresslist组件内容
        name: 'addresslist',
        path: '/addresslist',
        component: addresslist
    }, {
        // 当浏览器路径为/address时，渲染address组件内容
        name: 'address',
        path: '/address',
        component: address
    }]
})

// 路由拦截
router.beforeEach(function (to, from, next) {
    // 判断目标路由是否需要登录权限
    // if(to.meta.requiresAuth){
    // console.log(to.meta.requiresAuth, "--------");

    if (to.matched.some(item => item.meta.requiresAuth)) {

        // 判断是否已登录
        let authorization = localStorage.getItem('Authorization');

        if (authorization) {

            next();

        } else {
            next({
                path: '/login',
                query: { targetUrl: to.fullPath }
            })
        }
    } else {
        next();
    }

})
export default router;