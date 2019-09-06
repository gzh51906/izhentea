 <template>
  <div class="home">

    <!--                轮播图                --> 

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

    <!--                 头条                 -->

    <headline></headline>    

    <!--                 宫格                 -->

    <chagrid></chagrid>

    <!--                三张图片               -->

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

    <!--               新品推荐               -->

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
          <span class="text">正山小种  御仙庄 2017年出凡  红茶50g</span>
          <span class="price">￥49</span>
          <img
            src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/c38009a4-e072-44f4-a6c4-75bbfee5e4d4.jpg"
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
          <span class="text">正宗碧螺春 2019绿茶新茶雨前一级碧螺茶100g罐装</span>
          <span class="price">￥52</span>
          <img
            src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/b12df48f-0828-4b5a-8e00-ad9ff55f889b.jpg"
            alt
          />
        </van-col>
      </van-row>
    </div>

    <!--                热销榜               -->

    <div class="hot-wrapper">
      <h3>热销榜</h3>
      <van-grid :border="false" :column-num="3" :gutter="8" class="hot-content">
  <van-grid-item class="hot-item">
    <img src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/cbe8bc5a-40f7-4375-887b-36d809bc8f8b.jpg" />
    <div class="hot-desc"><span class="text">老同志普洱茶 散茶 2018年一级料  </span><span  class="pric">￥61</span></div>
  </van-grid-item>
  <van-grid-item class="hot-item">
    <img src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/e90b6ba5-ff1d-4425-adae-8fc0031c0cfe.jpg" /><div class="hot-desc"><span class="text">雀舌 2019新茶  绿茶 明前特级毛尖茶  嫩芽茶叶</span><span class="pric">￥69</span></div>
  </van-grid-item>
  <van-grid-item class="hot-item">
    <img src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/33cd0c26-3952-40f2-b941-3b378d4dc964.jpg" />
    <div class="hot-desc"><span class="text">茶臻选自营  普洱 滇红 玫瑰花 快客杯超值套装</span><span  class="pric">￥138</span></div>
  </van-grid-item>
</van-grid>
    </div>

    <!--           热门品牌          -->

    <tags></tags>

    <!--           猜你喜欢            -->

    <div ref="container" sticky><van-sticky :container="container" class="recommend-text"> 
      <img type="warning"
        src="data:image/png;base64,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"
        alt
      />
    </van-sticky>
    <div><van-row class="list">
  <van-col :span="12" class="img-wrapper"  v-for="data in list" :key="data._id" @click="goto(data._id)"><img :src="data.src" alt=""><div class="tex"><span >{{data.content}}</span></div><div class="pric"><span >{{data.price}}</span></div></van-col>
</van-row></div>
</div>
<span class="di">茶有底，道无尽。</span>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from "./bottom.vue";
import { log } from "util";
import headline from "../components/headline.vue";
import chagrid from "../components/chagrid.vue";
import tags from "../components/tags.vue";
export default {
  components: {
    bottom,
    headline,
    chagrid,
    tags
  },
  data() {
    return {
      list: [],
      container: null
    };
  },
  
  methods: {
    goto(_id) {
      this.$router.push({
        name: "goodsdetail",
        params: {
          _id
        }
      });
    }
  },
  async created() {
    let data = await this.$axios
      .get("http://localhost:1906/goods", {
        params: {
          act: "index"
        }
      })
      .then(({ data: { data } }) => {
        // console.log(data);
        //数据格式化
        this.list = data;
      });
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
</script>
<style>
* {
  box-sizing: border-box;
}
.home {
  overflow: auto;
  background: #eee;
}
.recommend {
  height: 180px;
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
  margin: 10px auto 0;
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
  width: 95%;
  margin: auto;
  background: #fff;
}
.text {
  display: inline-block;
  width: 80%;
  margin-left: 8px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #333;
}
.price {
  margin-left: 15px;
  display: inline-block;
  text-align: center;
  width: 45px;
  height: 14px;
  color: #fff;
  background: #d45949;
  font-size: 0.2rem;
}
.item {
  border: 1px solid #eee;
  position: relative;
  padding: 7px;
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
  padding: 0 12px 14px 12px;
  width: 95%;
  background-image: url(https://shop.izhentea.com/static/img/hotbg.6a6074e.png);
}
.hot-wrapper h3 {
  line-height: 37px;
  margin: 0;
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-weight: normal;
}

.hot-content {
  margin: auto;
  width: 326px;
  height: 130px;
}
.hot-content img {
  padding: 5px;
  width: 95px;
  height: 95px;
}
.hot-content .text {
  line-height: 36px;
  display: inline-block;
  width: 52px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hot-content .pric {
  line-height: 36px;
  color: #d45949;
  font-size: 12px;
  font-weight: bolder;
}
.hot-desc {
  border-top: #ccc 1px solid;
  display: flex;
  justify-content: space-between;
}
.hot-item {
  width: 106px;
  height: 130px;
}

.img-wrapper img {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  width: 150px;
  height: 150px;
}
.list {
  margin: auto;
  width: 95%;
}
.tex {
  height: 62px;
  padding-left: 2;
  line-height: 21px;
  font-size: 15px;
  color: #333;
}
.img-wrapper {
  background: #fff;
  border-top: 1px solid #eee;
  padding: 0 13px;
}
.img-wrapper:nth-child(2n-1) {
  border-right: 1px solid #eee;
}
.img-wrapper .pric {
  margin-top: 17px;
  line-height: 36px;
  color: #d45949;
  font-size: 14px;
  font-weight: bold;
}
.pric span::before {
  content: "￥";
}
.di {
  display: inline-block;
  line-height: 90px;
  color: #999;
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin-bottom: 70px;
}
</style>

