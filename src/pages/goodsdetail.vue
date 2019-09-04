<template>
  <div class="detail">
    <!-- 轮播 -->
    <van-swipe @change="onChange" class="lunbo">
      <van-swipe-item>
        <img :src="data.src" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 价格 -->
    <div class="datail-price">¥{{data.price}}</div>
    <!-- 信息 -->
    <div class="datail-info">
      <p class="datail-title">同德普洱 论剑系列 甲午普洱生茶</p>
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
    let { id } = this.$route.params;
    let { data: { data: data } } = await this.$axios.get(
      "http://localhost:1906/goods/" + this.$route.params.id,
      {
        params: {}
      }
    );
    console.log("data", data);
    this.data = {
      src: data.src,
      price: data.price,
      content: data.content
    };
    console.log("=========", this.data);
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
</style>