<template>
  <div class="chaping">
    <!-- 头部 -->
    <div class="top">
      茶评
      <span>
        <van-icon name="arrow-left" @click="goto" />
      </span>
    </div>
    <!-- 客服评论评分-->
    <div class="fen">
      <span class="fen-left">品评分</span>
      <div class="fen-right">
        <div class="star">
          <van-icon name="star" v-for="item in 5" :key="item" />
        </div>
        <span class="fen-num">10分</span>
      </div>
    </div>
    <!-- 客户留言 -->
    <pinglun v-for="item in list" :key="item._id" :item="item"></pinglun>
  </div>
</template>
<script>
import pinglun from "../components/yupinglun.vue";
export default {
  data() {
    return { list: [] };
  },
  components: {
    pinglun
  },
  async created() {
    let { data } = await this.$axios.get(
      "http://localhost:1906/yulist/goodstalk",
      {}
    );

    let a = parseInt(this.$route.query.a);

    this.list = data.data.slice(a, a + 5);
    console.log(this.$route);
  },
  methods: {
    goto() {
      this.$router.push({
        name: "goodsdetail",
        params: {
          _id: this.$route.query.a
        }
      });
    }
  }
};
</script>
<style scoped>
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

.top span {
  width: 1.3rem;
  height: 2rem;
  float: left;
}
.top span .van-icon {
  margin-left: 0.6rem;
  display: block;
  font-size: 1rem;
  color: #999;
  line-height: 44px;
}
.fen {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  background: #fff;
  margin-top: 0.7rem;
}
.fen .fen-left {
  font-size: 0.9rem;
  color: #333;
}
.fen .fen-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fen-right .star .van-icon {
  font-size: 0.9rem;
  color: yellow;
  margin-right: 0.2rem;
}
.fen-right .fen-num {
  font-size: 0.9rem;
  color: #333;
}
</style>