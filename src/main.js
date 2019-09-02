import Vue from 'vue'
import App from './App.vue'

//引入router组件
import router from './router';


Vue.config.productionTip = false

//引入pages组件
//引入Layout 布局组件
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);

//引入Swipe 轮播图组件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

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
