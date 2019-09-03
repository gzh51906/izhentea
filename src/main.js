import Vue from 'vue'
import App from './App.vue'

//引入store实例
import store from './store'
//引入router组件
import router from './router';
import axios from 'axios';



Vue.config.productionTip = false


// 把axios写入Vue原型，方便子组件调用
Vue.prototype.$axios = axios;


new Vue({
  // 4.把router实例注入到vue实例中
  router,
  // 4. 把store注入Vue实例
  store,
  render: h => h(App),
}).$mount('#app')
