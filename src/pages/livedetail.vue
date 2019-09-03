<template>
  <div class="detail">
    <div class="top">
      <span>
        <van-icon name="arrow-left" />
      </span>
    </div>
    <div class="main">
      <p class="title">视频丨易武为后，煮茶论剑</p>
      <div class="touxiang">
        <img src="../img/touxiang.jpg" alt />
        <span>茶臻选</span>
      </div>
      <div class="word">
        <p class="yu-text">
          <img src="../img/dat.jpg" alt />
        </p>
        <p class="yu-text">说到普洱，广为流传这么一句话“班章为王，易武为后”。班章茶气刚烈，厚重醇香，霸气十足，王者风范。易武口感细腻，汤中带甜，如王后般温柔典雅。</p>
        <p
          class="yu-text"
        >每个人都有自己的偏好，有人喜欢轰轰烈烈，有人喜欢平淡简单，还有人时而喜欢浓烈时而喜欢平静。同样，喝茶也会根据个人喜好不同、心境不同而有所不同。有人喜欢班章，有人喜欢易武，品味没有好坏之分，喜欢的就是最好的。</p>
        <p class="foot-text">现在下单任意一款论剑系列产品，即送紫砂壶！！！</p>
      </div>
      <div class="look">
        <div class="look-left">
          <van-icon name="eye-o" />
          <span>422人看过</span>
        </div>
        <div class="look-right">
          <van-icon name="good-job-o" />
          <span>4</span>
        </div>
      </div>
    </div>

    <!-- 评论区 -->
    <talk></talk>
    <!-- 茶品商品列表 -->
    <yugoods v-slot:title>茶品</yugoods>
    <p class="but">已经到底了</p>
  </div>
</template>

<script>
//评论
import talk from "../components/yutalk.vue";
//茶品商品列表
import yugoods from "../components/yugoods.vue";
export default {
  data() {
    return {};
  },
  components: {
    talk,
    yugoods
  }
};
</script>

<style  scoped>
.detail {
  background: #f2f2f2;
}

.top {
  padding: 0.6rem;
  display: flex;
  justify-content: flex-start;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.top span {
  width: 1.3rem;
  height: 2rem;
}
.top span .van-icon {
  margin-top: 0.6rem;
  display: block;
  font-size: 1rem;
  color: #999;
}
.main {
  padding: 1.2rem 1.2rem 0.6rem;
  background: #fff;
  margin-bottom: 0.8rem;
}
.main .title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  line-height: 0.533333rem;
}
.main .touxiang {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.666667rem 0;
}
.touxiang img {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  margin-right: 0.393333rem;
}
.touxiang span {
  color: #666;
  font-size: 0.96rem;
  line-height: 1.593333rem;
  height: 1.593333rem;
}
.word {
  width: 100%;
  white-space: pre-wrap;
}
.main .yu-text {
  width: 100%;
  font-size: medium;
  line-height: 2;
  letter-spacing: 2px;
  margin-bottom: 0.266667rem;
}
.main .yu-text img {
  width: 100%;
}
.main .foot-text {
  font-size: 1.166667rem;
  font-weight: 700;
  line-height: 2;
  color: red;
}
.look {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.look-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.look-left .van-icon {
  color: #999;
  font-size: 0.9rem;
  margin-right: 0.4rem;
}
.look-left span {
  color: #999;
  font-size: 0.7rem;
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
.but {
  margin: 0.6rem 0;
  text-align: center;
  color: #999;
  font-size: 0.74rem;
}
</style>