<template>
  <div class="production">
    <van-button type="primary" @click="showPopup">
      <div class="left">
        <van-icon name="shop-o" class="argu-check" />
        <span class="argu-wei">同德茶</span>
        <van-icon name="medel-o" class="argu-check" />
        <span class="argu-wei">2015</span>
        <van-icon name="location-o" class="argu-check" />
        <span class="argu-wei">云南</span>
      </div>
      <div class="right">
        <van-icon name="arrow" />
      </div>
    </van-button>
    <!-- 显示商品参数 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <div class="content">
        <p class="title">产品参数</p>
        <div class="pai">
          <span class="big-tit">品牌</span>
          <span class="big-info">同德茶</span>
        </div>
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
  background-color: #fff;
  padding: 0 0.9rem;
  height: 2.65rem;
}
.production .van-button--primary {
  background-color: #fff;
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
  color: #999;
  font-size: 1.3rem;
  margin-right: 0.5rem;
}
.production .left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.production .left .argu-wei {
  color: #333;
  font-size: 0.8rem;
  margin-right: 1rem;
}
.production .left .argu-text {
  color: #333;
  font-size: 0.8rem;
}

.production .right .van-icon {
  color: #333;
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
.content .pai {
  padding: 0 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
}
.pai .big-tit {
  font-size: 1rem;
  color: #999;
  width: 5rem;
}
</style>