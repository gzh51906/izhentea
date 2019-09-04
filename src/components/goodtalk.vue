<template>
  <!-- 评论 -->
  <div class="goodstalk">
    <div class="talk-top">
      <div class="left">
        <span class="text">茶评</span>
        <span class="num">(10)</span>
      </div>
      <p class="right" @click="goto">查看全部</p>
    </div>
    <div class="msg-info">
      <div class="info">
        <div class="info-right">
          <div class="tu">
            <img src="../img/li.jpg" alt />
          </div>
          <div class="info-text">
            <span class="name">再不努力我们就老了</span>
            <span class="time">2019-06-05</span>
          </div>
        </div>
        <div class="look-right">
          <van-icon name="good-job-o" />
          <span>4</span>
        </div>
      </div>
      <p class="info-word">茶叶不错，泡出来的茶水晶莹通透，颜色很正，闻起来味道纯正，不错</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goto() {
      let a = Math.random() * 73;
      this.$router.push({ name: "chaping", query: { a } });
    }
  },
  async created() {}
};
</script>

<style scoped>
.goodstalk {
  margin-top: 1rem;
  background: #fff;
  padding: 0 1rem;
}
.talk-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}
.talk-top .left {
  display: flex;
  justify-content: flex-start;
}
.talk-top .left .text {
  color: #333;
  font-size: 1rem;
  margin-right: 0.25rem;
}
.talk-top .right {
  margin: 0;
  color: #333;
  font-size: 1rem;
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info .info-right {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
/* .info-right .tu {
  width: 2.033333rem;
  height: 2.033333rem;
  border-radius: 50%;
} */
.info-right .tu img {
  width: 2.033333rem;
  height: 2.033333rem;
  border-radius: 50%;
}
.info-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 0.5rem;
}
.info-text .name {
  font-size: 0.9066667rem;
  color: #333;
}
.info-text .time {
  font-size: 0.6066667rem;
  color: #999;
}
.look-right {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e8e8e8;
  padding: 0.1rem 0.566667rem;
}
.look-right .van-icon {
  color: #999;
  font-size: 0.9rem;
  margin-right: 0.4rem;
}
.look-right span {
  color: #000;
  font-size: 0.7rem;
}
.info-word {
  margin: 0.5rem 0;
  color: #333;
  font-size: 0.9rem;
}
</style>