<template>
  <div class="chayu-list">
    <van-tabs @click="onClick" sticky>
      <van-tab v-for="index in toptitle" :title="index " :key="index">
        <hot></hot>
        <chayulist
          v-for="item in uplist"
          :key="item._id"
          :item="item"
          @click.native="goto(item._id,item)"
        ></chayulist>
      </van-tab>
    </van-tabs>

    <!-- <van-tabs bind:click="onClick">
      <van-tab title="热门" nav-class>
        <hot></hot>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
    </van-tabs>-->
  </div>
</template>

<script>
import hot from "./hot.vue";
import chayulist from "./chayulist.vue";

export default {
  data() {
    return {
      active: 1,
      list: [],
      uplist: [],
      toptitle: [
        "热门",
        "茶业复兴",
        "茶知识",
        "视频",
        "冲泡",
        "茶与健康",
        "茶文化",
        "美文",
        "紫砂壶",
        "茶空间",
        "绿茶",
        "红茶"
      ]
    };
  },
  methods: {
    onClick(a, b) {
      this.uplist = this.list.slice(40 * a, 40 * (a + 1));
    },
    goto(id, item) {
      this.$router.push({ name: "livedetail", params: { id } });
    }
  },
  components: {
    hot,
    chayulist
  },
  async created() {
    let { data } = await this.$axios.get(
      "http://47.96.238.230:1906/yulist/check",
      {}
    );
    // console.log(data);
    this.list = data.data;
    this.uplist = this.list.slice(0, 40);
  }
};
</script>

<style  scoped>
.van-tab {
  background: #000;
}
.chayu-list {
  margin-bottom: 4.5rem;
}
</style>