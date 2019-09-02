<template>
  <div class="chayu">
    <!-- 头部 -->
    <div class="top">茶语</div>
    <!-- 选项切换组件 -->
    <chayutop></chayutop>
  </div>
</template>

<script>
import chayutop from "../components/chayutop.vue";
export default {
  data() {
    return {};
  },
  components: {
    chayutop
  }
};
</script>

<style  scoped>
.top {
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 20px;
  text-align: center;
  background: #fff;
}
.chayu {
  background: #f2f2f2;
}
</style>