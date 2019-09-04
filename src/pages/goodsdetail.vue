<template>
  <div class="detail">
    <!-- 轮播 -->
    <van-swipe @change="onChange" class="lunbo">
      <van-swipe-item>
        <img src="../img/lun.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../img/lun2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>

      <div class="custom-indicator" slot="indicator">{{ current + 1 }} / 4</div>
    </van-swipe>
    <!-- 价格 -->
    <div class="datail-price">¥ 418</div>
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
      current: 0
    };
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
</style>