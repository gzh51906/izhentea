<template>
  <div class="detail">
    <div class="back-wrap"><img src="data:image/png;base64,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" alt=""></div>
    <!-- 轮播 -->
    <van-swipe @change="onChange" class="lunbo">
      <van-swipe-item>
        <img :src="list.src" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 价格 -->
    <div class="datail-price">¥{{list.price}}</div>
    <!-- 信息 -->
    <div class="datail-info">
      <p class="datail-title">{{list.content}}</p>
      <p class="detail-text">精选云南勐腊茶区七村八寨头春古树茶倾力拼配制作</p>
      <div class="price-wrap">
        <van-icon name="star" />
        <span class="price-text">品评分</span>
        <span class="price-num">10</span>
      </div>
    </div>
    <!-- 选择参数 弹出层 -->
    <argument></argument>
    <!-- 弹出层 商品产地信息 -->
    <production></production>
    <!-- 弹出商家服务承诺 -->
    <listserve></listserve>
    <!-- 评论-->
    <goodstalk></goodstalk>
    <!-- 底部购买按钮 -->
    <goodsbuy></goodsbuy>
    <!-- 商品详情 -->
    <div class="goods-info"></div>
    <div class="src-box">
      <div class="goods-src" v-for="item in src" :key="item">
        <img :src="item" alt />
      </div>
    </div>
  </div>
</template>

<script>
import argument from "../components/argument.vue";
import production from "../components/production.vue";
import listserve from "../components/listserve.vue";
import goodstalk from "../components/goodtalk.vue";
import goodsbuy from "../components/goodsbuy.vue";
export default {
  data() {
    return {
      list: {},
      current: 0,
      src: [
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/725e4bad-ef8e-4605-92db-2c0799a1ce56.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/993c147b-9653-4d70-8636-1b731fd6999f.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/8c95958e-f12a-4c7b-98df-f12a1fedaa28.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/79240ada-8ec3-4a20-a25a-730660e50891.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/a9544f05-adc7-413f-84cb-1b7888417f0f.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/720a81b9-0279-465d-89c3-5d961bf45d15.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/6cdb8a7e-f323-4470-b688-d50111dc62f1.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/aaad7d0e-40d9-4113-a780-331d2dd26725.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/4290f639-2a7f-4763-aef0-f459fdc3f167.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/48c109a1-bd84-40df-afc8-98dffb3d824c.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/8e623736-daf0-4ed0-970a-b6219617e8d1.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/97d3dcf9-7d15-40f9-b38c-3c2d3745b058.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/9e142731-a173-415b-89d2-9eceece0e478.jpg",
        "https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/2dff0e06-a6af-4ec3-affe-132b2dd459e4.jpg"
      ]
    };
  },
  async created() {
    let { _id } = this.$route.params;
    let { data: { data } } = await this.$axios.get(
      "http://localhost:1906/goods/" + this.$route.params._id,
      {
        params: { id: this.$route.params }
      }
    );

    this.list = data[0];
    console.log("list", this.list);
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
  components: {
    argument,
    production,
    listserve,
    goodstalk,
    goodsbuy
  }
};
</script>

<style  scoped>
.detail {
  background: #f2f2f2;
  margin-bottom: 3.2rem;
}
.van-swipe-item {
  width: 100%;
  height: 23.5rem !important;
}
.lunbo img {
  width: 100%;
  height: 100%;
}
.custom-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 0.466667rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border-radius: 20px;
  padding: 0 9px;
  box-sizing: border-box;
  font-size: 12px;
}
.datail-price {
  padding: 1rem 1rem 0;
  background: #fff;
  color: #d45949;
  font-weight: 700;
  font-size: 1.2rem;
}
.datail-info {
  padding: 1rem;
  background: #fff;
}
.datail-info .datail-title {
  margin: 0 0 0.65rem;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 700;
  color: #333;
}
.detail-text {
  margin: 0 0 0.65rem;
  line-height: 0.95rem;
  font-size: 0.85rem;
  color: #666;
}
.price-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.price-wrap .van-icon {
  color: yellow;
  font-size: 0.76rem;
}
.price-text {
  color: #999;
  font-size: 0.76rem;
  margin: 0 0.25rem;
}
.price-num {
  font-size: 0.76rem;
  color: #333;
}
.goods-info {
  width: 8.96rem;
  height: 1.7rem;
  margin: 0.7rem auto;
  background-size: cover;
  background-image: url(../img/xiangq.png);
}
.goods-src {
  border: 0;
  margin: 0;
  font-size: 0;
}
.goods-src img {
  width: 100%;
  height: 100%;
}
.back-wrap {
  z-index: 1;
  padding: 15px;
  position: absolute;
}
.back-wrap img {
  width: 30px;
  height: 30px;
}
</style>