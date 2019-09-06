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

    <wrapper></wrapper>
    <div class="activeWraper">
      <img src="../img/activity.jpg" alt />
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
          <span class="text">正山小种 御仙庄 2017年出凡 红茶50g</span>
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
          <img
            src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/cbe8bc5a-40f7-4375-887b-36d809bc8f8b.jpg"
          />
          <div class="hot-desc">
            <span class="text">老同志普洱茶 散茶 2018年一级料</span>
            <span class="pric">￥61</span>
          </div>
        </van-grid-item>
        <van-grid-item class="hot-item">
          <img
            src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/e90b6ba5-ff1d-4425-adae-8fc0031c0cfe.jpg"
          />
          <div class="hot-desc">
            <span class="text">雀舌 2019新茶 绿茶 明前特级毛尖茶 嫩芽茶叶</span>
            <span class="pric">￥69</span>
          </div>
        </van-grid-item>
        <van-grid-item class="hot-item">
          <img
            src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/33cd0c26-3952-40f2-b941-3b378d4dc964.jpg"
          />
          <div class="hot-desc">
            <span class="text">茶臻选自营 普洱 滇红 玫瑰花 快客杯超值套装</span>
            <span class="pric">￥138</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div>

    <!--           热门品牌          -->

    <tags></tags>

    <!--           猜你喜欢            -->
    <div ref="container">
      <van-sticky :container="container" class="recommend-text">
        <img type="warning" src="../img/related.png" alt />
      </van-sticky>
      <div>
        <van-row class="list">
          <van-col
            :span="12"
            class="img-wrapper"
            v-for="data in list"
            :key="data._id"
            @click="goto(data._id)"
          >
            <img :src="data.src" alt />
            <div class="tex">
              <span>{{data.content}}</span>
            </div>
            <div class="pric">
              <span>{{data.price}}</span>
            </div>
          </van-col>
        </van-row>
      </div>
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
import wrapper from "../components/wrapper.vue";
import tags from "../components/tags.vue";
export default {
  components: {
    bottom,
    headline,
    chagrid,
    wrapper,
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

