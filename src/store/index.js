import Vue from 'vue';

// 1. 引入
import Vuex from 'vuex';

//分割Vuex仓库
import state from './state';
import actions from './actions';
import mutations from './mutations'

// 2. 安装（使用）
Vue.use(Vuex);

// 3. 实例化并配置参数
export default new Vuex.Store({
    // store模块化
    state,
    actions,
    mutations
});

