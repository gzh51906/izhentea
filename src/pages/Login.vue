<template>
  <div class="login">
    <div class="header-icon">
      <van-icon name="arrow-left"></van-icon>
    </div>
    <div class="logo">
      <img src="../assets/logo-tea.png" alt />
    </div>
    <div class="rl-warp"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/indexbg.a937a31.png);
  background-size: contain;
  display: flex;
  flex-direction: column;
  position: relative;
}

.header-icon {
  width: 100%;
  height: 0.586667rem;
  position: absolute;
  top: 0.666667rem;
  left: 0;
  font-size: 0.266667rem;
}
.header-icon .van-icon {
  font-size: 0.586667rem;
  color: #ffffff;
}
.logo {
  width: 100%;
  height: 7.733333rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  width: 1.2rem;
  height: 1.2rem;
}
</style>