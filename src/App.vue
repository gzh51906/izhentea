<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";

//引入ui组件vant
import Vant from "vant";
import "vant/lib/index.css";
//引入rem文件
import "./rem.js";

//把底部按钮单独放在另一个文件里

Vue.use(Vant);

export default {
  name: "app",

  components: {}
};
</script>

<style>
.footer {
  height: 74px;
}
.footer-item .van-icon {
  font-size: 25px;
}
</style>
