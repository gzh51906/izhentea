<template>
  <div class="argu">
    <van-button type="primary" @click="showPopup">
      <div class="left">
        <span class="argu-check">已选</span>
        <span class="argu-wei">400g</span>
        <span class="argu-text">数量：</span>
        <span class="argu-num">1</span>
      </div>
      <div class="right">
        <van-icon name="arrow" />
      </div>
    </van-button>
    <!-- 显示商品参数 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <div class="content">
        <div class="pro-title">
          <img src="../img/lun2.jpg" alt />
          <div class="pro-right">
            <p class="pro-price">￥418</p>
            <div class="pro-left">
              <span class="pro-check">已选: 400g</span>

              <span class="pro-text">数量：1</span>
            </div>
          </div>
        </div>
        <!-- 参数选项 -->
        <div class="select">
          <p class="select-text">净含量</p>
          <div class="select-btn">
            <span class="btn1">400g</span>
          </div>
        </div>
        <!-- 数量选项 -->
        <div class="num-wrap">
          <p class="num-text">数量</p>
          <van-stepper v-model="value" />
        </div>
      </div>
      <goodsbuy></goodsbuy>
    </van-popup>
  </div>
</template>
<script>
import goodsbuy from "./goodsbuy.vue";
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
  },
  components: {
    goodsbuy
  }
};
</script>
<style  scoped>
.argu {
  padding: 0 0.9rem;
  height: 2.65rem;
  background-color: #fff;
}
.argu .van-button--primary {
  background-color: #fff;
  border: none;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #f2f2f2;
}
.argu .van-button__text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.argu .left .argu-check {
  color: #999;
  font-size: 0.8rem;
  margin-right: 1.3rem;
}
.argu .left .argu-wei {
  color: #333;
  font-size: 0.8rem;
  margin-right: 1.3rem;
}
.argu .left .argu-text {
  color: #333;
  font-size: 0.8rem;
}
.argu .left .argu-num {
  color: #333;
  font-size: 0.8rem;
}
.argu .right .van-icon {
  color: #333;
  font-size: 0.8rem;
}
.content {
  height: 100%;
  padding: 0 1.5rem;
}
.pro-title {
  position: relative;
}
.pro-title img {
  width: 4.6rem;
  height: 4.6rem;
  position: absolute;
  top: -2.5rem;
}
.van-popup {
  overflow-y: visible !important;
}
.pro-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5rem;
}
.pro-right .pro-price {
  margin: 0;
  line-height: 1.6rem;
  color: #d45949;
  font-weight: 700;
  font-size: 0.9rem;
}
.pro-left .pro-check {
  margin-right: 0.9rem;
  font-weight: 300;
  color: #666;
  font-size: 0.7rem;
}
.pro-left .pro-text {
  font-weight: 300;
  color: #666;
  font-size: 0.7rem;
}
.select {
  margin-bottom: 1.5rem;
}
.select .select-text {
  color: #333;
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
}
.select .select-btn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.select .select-btn .btn1 {
  border: 1px solid #f2f2f2;
  color: #333;
  font-size: 0.7rem;
  padding: 0.2rem 1rem;
}
.select .select-btn .cur {
  border: 1px solid #f2f2f2;
  color: #333;
  font-size: 0.7rem;
  padding: 0.2rem 1rem;
  background: #d45949;
}

.num-wrap .num-text {
  color: #333;
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
}
/* .num-wrap .van-stepper__input {
  margin: 0 !important;
} */
</style>