import Vue from 'vue'
import App from './App.vue'

//引入store组件
import store from './store'

//引入router组件
import router from './router';
//引入axios组件
import axios from 'axios';



// console.log(store);

//test
axios.head()
Vue.config.productionTip = false


// 把axios写入Vue原型，方便子组件调用
Vue.prototype.$axios = axios;


new Vue({
  store,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
