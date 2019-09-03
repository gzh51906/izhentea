import Vue from 'vue';

import Home from "../pages/Home.vue"
import Mine from "../pages/Mine.vue"
import Chayu from "../pages/Chayu.vue"
import Shopcart from "../pages/Shopcart.vue"
import Login from "../pages/Login.vue"
import livedetail from "../pages/livedetail.vue"
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
        component: Mine
    },
    {
        // 当浏览器路径为/home时，渲染Chayu组件内容
        name: 'chayu',
        path: '/chayu',
        component: Chayu
    },
    {
        // 当浏览器路径为/home时，渲染Shopcart组件内容
        name: 'shopcart',
        path: '/shopcart',
        component: Shopcart
    }, {
        // 当浏览器路径为/livedetetail时，渲染Home组件内容
        name: 'livedetail',
        path: '/livedetail',
        component: livedetail
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


export default router;

