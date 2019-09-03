<template>
  <div id="app">
<<<<<<< HEAD
  <router-view></router-view>
  <van-tabbar v-model="active" active-color="#000" inactive-color="#ccc" route>
    <van-tabbar-item :icon="item.icon" v-for="item in menu" :key="item.name" :to="item.path" replace >
    {{item.text}}
    </van-tabbar-item>

  </van-tabbar>
=======
    <router-view></router-view>
>>>>>>> dev
  </div>
</template>

<script>
import Vue from "vue";

//引入ui组件vant
import Vant from "vant";
import "vant/lib/index.css";

//把底部按钮单独放在另一个文件里

Vue.use(Vant);

export default {
  name: "app",

  components: {}
};
</script>

<style>
</style>
