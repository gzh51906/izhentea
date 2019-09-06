import Vue from 'vue';

// 1. 引入
import Vuex from 'vuex';

// 2. 安装（使用）
Vue.use(Vuex);

//引入store组件
import common from './common';    //引入公共store组件

// 3. 实例化并配置参数
let store = new Vuex.Store({
    // store模块化
    modules: {
        common
    }
});

export default store;