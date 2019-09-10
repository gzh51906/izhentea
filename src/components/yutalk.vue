<template>
  <div class="yu-talk">
    <div class="ping-top">
      <span>评论 ({{list.length}})</span>
    </div>
    <!-- 填写评论 -->
    <div class="mine-talk">
      <img src="../img/li.jpg" alt />

      <textarea placeholder="填写评论" rows="1"></textarea>
      <span>发送</span>
    </div>
    <!-- 评论区 -->
    <pinglun v-for="item in list" :key="item._id" :item="item"></pinglun>
    <!-- 查看评论区 -->
    <div class="chakan">
      <van-button type="primary" @click="showPopup">查看更多评论</van-button>
      <van-popup v-model="show" position="bottom" :style="{ height: '80%' }">
        <div class="ping-top">
          <span>评论 ({{list.length}})</span>
        </div>
        <pinglun v-for="item in list" :key="item._id" :item="item"></pinglun>
        <div class="mine-talk">
          <img src="../img/li.jpg" alt />

          <textarea placeholder="填写评论" rows="1"></textarea>
          <span>发送</span>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
//评论
import pinglun from "./yupinglun.vue";

export default {
  data() {
    return { show: false, list: [] };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  },
  components: {
    pinglun
  },
  async created() {
    let { data } = await this.$axios.get(
      "http://47.96.238.230:1906/yulist/goodstalk",
      {}
    );

    let a = parseInt(Math.random() * 4);

    this.list = data.data.slice(a, a + a);
    // console.log(this.list);
  }
};
</script>

<style  scoped>
.yu-talk {
  background: #fff;
}
.ping-top {
  padding: 0.966667rem 0.6833333rem;
}
.ping-top span {
  color: #333;
  font-size: 1.166667rem;
}
.mine-talk {
  padding: 0 0.966667rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.9rem;
}
.mine-talk img {
  width: 2.033333rem;
  height: 2.033333rem;
  border-radius: 50%;
}
.mine-talk textarea {
  padding: 0.386667rem;
  box-sizing: border-box;
  height: 1.9rem;
  flex: 1;
  margin: 0 0.666667rem;
  font-size: 0.766667rem;
  color: #323233;
  background-color: transparent;
}
.mine-talk span {
  width: 3.9rem;
  text-align: center;
  height: 1.9rem;
  line-height: 1.9rem;
  box-sizing: border-box;
  color: #fff;
  font-size: 1rem;
  background-color: #d45949;
}

.van-button--primary {
  background: #fff;
  color: #333;
  border: none;
}
.chakan {
  display: flex;
  justify-content: center;
}
.chakan .van-button--primary {
  width: 100%;
}
</style>