import Vue from 'vue'
import App from './App.vue'

//引入store实例
import store from './store'
//引入router组件
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false


//引入Grid 宫格组件
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);

//引入Tab 标签页组件
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

new Vue({
  // 4.把router实例注入到vue实例中
  router,
  // 4. 把store注入Vue实例
  store,
  render: h => h(App),
}).$mount('#app')
