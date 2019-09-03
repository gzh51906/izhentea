<template>
  <div class="chayu-list">
    <van-tabs bind:click="onClick">
      <van-tab title="热门" nav-class>
        <hot></hot>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import hot from "./hot.vue";

export default {
  data() {
    return { active: 1 };
  },
  methods: {
    onClick(a, b) {
      console.log("-----", a, b);
    }
  },
  components: {
    hot
  }
};
</script>

<style  scoped>
.van-tab {
  background: #000;
}
</style>