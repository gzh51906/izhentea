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

//把底部按钮单独放在另一个文件里

Vue.use(Vant);

export default {
  name: "app",

  components: {}
};
</script>

<style>
<<<<<<< HEAD
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
.footer {
  height: 74px;
}
.footer-item .van-icon {
  font-size: 25px;
}
=======
>>>>>>> dev
</style>
