<template>
  <div class="home">
    <van-swipe class="recommend" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/e142bcdd-9a63-4f3f-93be-17a65504ecd5.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/aa01e33d-4f5e-4416-8ab1-2d6a417ce47e.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/db22da37-2e68-4c1e-b6cd-3f454103d0eb.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/a0af0254-4787-4528-8ba9-70fb0d24261e.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/0ff84cf8-b230-478c-b2ae-01551d485b18.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/3b011f45-7851-4307-bb1e-642381b46de5.jpg"
          alt
        />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="4" class="grid">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <van-row gutter="2" class="wrapper">
      <van-col span="12" class="pixels">
        <img
          src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/e5f3626c-4a80-4559-9bff-4f64e59edf92.jpg"
          alt
        />
      </van-col>
      <van-col span="12" class="pixels">
        <img
          src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/6/ce2909ea-e99e-4077-8264-d7c7208a28ac.jpg"
          alt
        />
      </van-col>
    </van-row>
    <div class="activeWraper">
      <img
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/9e6a6279-900d-4c21-a862-358e7f587fa8.jpg"
        alt
      />
    </div>
    <div class="recommend-text border-bottom">
      <img
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/3/9366ba31-64f5-4750-a13b-e8ef20eebd25.jpg"
        alt
      />
    </div>
    <div class="recommend-wrapper">
      <van-row gutter="2">
        <van-col span="12" class="item">
          <span class="text">安吉白茶 龙王山 2019年新茶 单罐50g</span>
          <span class="price">￥69</span>
          <img
            src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/6/ff20949c-233b-4f69-97ff-e98f85cd08ae.jpg"
            alt
          />
        </van-col>
        <van-col span="12" class="item">
          <span class="text">安吉白茶 龙王山 2019年新茶 单罐50g</span>
          <span class="price">￥69</span>
          <img
            src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/6/ff20949c-233b-4f69-97ff-e98f85cd08ae.jpg"
            alt
          />
        </van-col>
      </van-row>
      <van-row gutter="2">
        <van-col span="12" class="item">
          <span class="text">黄山毛峰 雨前茶 徽韵飘香 谢裕大 250g袋装</span>
          <span class="price">￥68</span>
          <img
            src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/bc8fd351-574c-4b96-a0f2-7cdbbf24bccb.jpg"
            alt
          />
        </van-col>
        <van-col span="12" class="item">
          <span class="text">黄山毛峰 雨前茶 徽韵飘香 谢裕大 250g袋装</span>
          <span class="price">￥68</span>
          <img
            src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/bc8fd351-574c-4b96-a0f2-7cdbbf24bccb.jpg"
            alt
          />
        </van-col>
      </van-row>
    </div>
    <div class="hot-wrapper">
      <h3>热销榜</h3>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from "./bottom.vue";
export default {
  components: {
    bottom
  },
  data() {
    return {};
  },
  async created() {
    let data = await this.$axios.get("http://localhost:1906/goods", {});
    // console.log(data);
  }
};
</script>
<style>
.home {
  overflow: auto;
  background: #eee;
}
.recommend img {
  width: 100%;
  height: 180px;
}
.grid {
  border: 1px solid #fff;
}
.wrapper {
  background: #eee;
  margin: 10px 0 10px 0;
}
.pixels img {
  width: 100%;
  height: 88px;
}
.activeWraper {
  background: #eee;
  padding: 0 10px 0 10px;
}
.activeWraper img {
  width: 100%;
  height: 80px;
}
.recommend-text {
  background: #fff;
  padding-top: 10px;
  position: relative;
  margin: 10px 10px 0px 10px;
  width: 95%;
  height: 43px;
}
.recommend-text img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 26px;
}
.recommend-wrapper {
  padding: 15px;
  width: 87%;
  margin: 0 10px 0px 10px;
  background: #fff;
}
.text {
  display: inline-block;
  width: 90%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #333;
}
.price {
  display: inline-block;
  text-align: center;
  width: 45px;
  height: 14px;
  color: #fff;
  background: #d45949;
  font-size: 0.2rem;
}
.item {
  position: relative;
  width: 50%;
  height: 90px;
}
.item img {
  margin-right: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
}
.hot-wrapper {
  height: 180px;
  background-size: contain;
  margin: 19px 10px 0 10px;
  width: 95%;
  background-image: url(https://shop.izhentea.com/static/img/hotbg.6a6074e.png);
}
.hot-wrapper h3 {
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-weight: normal;
}
</style>

