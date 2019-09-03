<template>
  <div class="login" v-if="changePage">
    <div class="header-icon">
      <van-icon name="arrow-left"></van-icon>
    </div>
    <div class="logo">
      <img src="../assets/logo-tea.png" alt />
    </div>
    <div class="rl-warp">
      <!-- <van-row class="input">请输入手机号</van-row> -->
      <van-cell-group class="input">
        <van-field v-model="value" placeholder="请输入手机号" />
      </van-cell-group>
      <van-row class="getCode">
        <van-button type="info" @click="getCodeMsg(value)">获取验证码</van-button>
      </van-row>
      <van-row class="textinfo">未注册茶臻选手机号,登录时即将自动注册</van-row>
    </div>
  </div>
  <Loginicode v-else></Loginicode>
</template>
<script>
import Loginicode from "./Login/loginIcode.vue";
export default {
  data() {
    return {
      value: "",
      changePage: true
    };
  },
  components: {
    Loginicode
  },
  methods: {
    getCodeMsg(num) {
      let regPhone = /^1[3-9]\d{9}$/; //电话准则
      if (regPhone.test(num)) {
        alert("手机号码正确，发送验证码");
        this.changePage = false;
        // this.$router.push();
      } else {
        alert("手机号码不正确，请重新输入");
      }
    }
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
  height: 22px;
  position: absolute;
  top: 30px;
  left: 0;
  font-size: 15px;
  padding: 0 22px;
}
.header-icon .van-icon {
  font-size: 22px;
  color: #ffffff;
}
.logo {
  width: 100%;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  width: 68px;
  height: 68px;
}

.rl-warp {
  color: #ffffff;
  height: 150px;
}
.rl-warp .input {
  width: 76%;
  height: 22px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rl-warp .getCode {
  text-align: center;
  margin: 0 50px;
  padding-top: 15px;
}

.rl-warp .getCode .van-button {
  width: 100%;
  height: 48px;
  background: #d45949;
  border-color: #d45949;
  font-size: 19px;
}

.rl-warp .textinfo {
  width: 70%;
  margin: 19px auto;
  text-align: center;
  font-size: 0.25rem;
  color: #fff;
  font-size: 14px;
}
</style>