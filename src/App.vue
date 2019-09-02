<template>
  <div id="app">
  <router-view></router-view>
  <van-tabbar v-model="active" active-color="#000" inactive-color="#ccc" route>
    <van-tabbar-item :icon="item.icon" v-for="item in menu" :key="item.name" :to="item.path" replace >
    {{item.text}}
    </van-tabbar-item>

  </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";

//引入ui组件vant
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

export default {
  name: "app",
  data() {
    return {
      active: 0,
      menu: [
        {
          name: "home",
          text: "首页",
          path: "/home",
          icon: "wap-home",
          color: ""
        },
        {
          name: "chayu",
          text: "茶语",
          path: "/chayu",
          icon: "gift-card-o"
        },
        {
          name: "shopcart",
          text: "购物车",
          path: "/shopcart",
          icon: "shopping-cart-o"
        },
        {
          name: "mine",
          text: "我的",
          path: "/mine",
          icon: "user-o"
        }
      ]
    };
  },
  components: {}
};
</script>

<style>
</style>
