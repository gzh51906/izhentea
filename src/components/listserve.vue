<template>
  <div class="production">
    <van-button type="primary" @click="showPopup">
      <div class="left">
        <span class="argu-wei">服务</span>
        <van-icon name="bulb-o" class="argu-check" />
        <span class="argu-wei">无忧退</span>
        <van-icon name="bill-o" class="argu-check" />
        <span class="argu-wei">随心买</span>
        <van-icon name="logistics" class="argu-check" />
        <span class="argu-wei">包邮</span>
      </div>
      <div class="right">
        <van-icon name="arrow" />
      </div>
    </van-button>
    <!-- 显示商品参数 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '75%' }">
      <div class="content">
        <p class="title">茶臻选基础保障</p>

        <p class="big-tit">无忧退</p>
        <p class="big-info">凡是加入品鉴计划的商品，消费者收到茶叶后，可先冲泡品鉴装。对比茶叶品质后，再决定是否购买。若要退货，快递费由平台承担。</p>
        <p class="big-tit">随心买</p>
        <p class="big-info">为满足不同客户需求，加入“随心买”的产品可选择小规格（10g，20g）购买</p>
        <p class="big-tit">正品保证</p>
        <p class="big-info">商品支持正品保证服务</p>
        <p class="big-tit">极速退款</p>
        <p class="big-info">极速退款是为诚信会员提供的退款退货流程，收到退货包裹确认无误后，将在48小时内办理退款，退款原路退回</p>
        <p class="big-tit">全场包邮</p>
        <p class="big-info">平台全品类包邮服务已开启</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value: 1
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
.production {
  padding: 0 0.9rem;
  height: 2.65rem;
  background-color: #ffe8e5;
}
.production .van-button--primary {
  background-color: #ffe8e5;
  border: none;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #f2f2f2;
}
.production .van-button__text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.production .left .argu-check {
  color: #d45949;
  font-size: 1.3rem;
  margin-right: 0.5rem;
}
.production .left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.production .left .argu-wei {
  color: #d45949;
  font-size: 0.8rem;
  margin-right: 1rem;
}
.production .left .argu-text {
  color: #d45949;
  font-size: 0.8rem;
}

.production .right .van-icon {
  color: #d45949;
  font-size: 0.8rem;
}
.content {
  height: 100%;
}
.content .title {
  color: #333;

  line-height: 2.5rem;
  font-size: 1rem;
  text-align: center;
  margin: 0;
}
.big-tit {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
  margin-top: 1rem;
  padding: 0 0.8rem;
}
.big-info {
  margin: 0;
  font-size: 1rem;
  color: #999;
  margin: 1rem 0;
  padding: 0 0.8rem;
}
</style>