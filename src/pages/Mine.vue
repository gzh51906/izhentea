<template>
  <div class="mine">
    <van-row type="flex" class="header" justify="center">
      <van-col span="24" class="imgbox">
        <img src="../assets/下载.png" alt />
        <span>登录/注册</span>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center" class="numltem">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 8</van-col>
      <van-col span="6">span: 8</van-col>
      <van-col span="6">span: 8</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scope>
.header {
  width: 100%;
  height: 226.31px;
  background: #333;
  display: flex;
  flex-direction: column;
  color: #ffffff;
}
.header img {
  width: 50.78px;
  height: 50.78px;
  border-radius: 50%;
}
.imgbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.numltem {
  padding: 0 11.4px;
  background: #000;
}
</style>