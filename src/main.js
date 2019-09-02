import Vue from 'vue'
import App from './App.vue'

//引入router组件
import router from './router';


Vue.config.productionTip = false


//引入Grid 宫格组件
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);

//引入Tab 标签页组件
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
