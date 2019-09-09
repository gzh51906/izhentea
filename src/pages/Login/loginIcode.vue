<template>
  <div class="loginIcode">
    <div class="header-icon">
      <van-icon name="arrow-left" @click="back"></van-icon>
    </div>
    <div class="pwd-input">
      <h2>请输入验证码</h2>
      <p>60秒内短信会到达手机13242854645</p>
      <van-password-input
        v-model="value"
        :length="4"
        :gutter="15"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        :mask="show"
      />
    </div>

    <!-- 数字键盘 -->
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
  </div>
  <!-- 密码输入框 -->
</template>
<script>
export default {
  props: ["code", "phone"],
  data() {
    return {
      value: "",
      showKeyboard: true,
      show: false
    };
  },

  methods: {
    async onInput(key) {
      this.value = (this.value + key).slice(0, 6);

      // 发起请求校验用户名是否已被注册
      if (this.value == this.code) {
        let { data } = await this.$axios.post(
          "http://localhost:1906/user/regcheck",
          {
            phone: this.phone
          }
        );

        console.log(data);

        if (data.code === 1) {
          let targetUrl = this.$route.query.targetUrl || "/mine";

          // 保存token到本地
          // localStorage.setItem("Authorization", data.data.authorization);
          this.$store.commit("login", data.data.authorization);

          this.$router.push(targetUrl).catch(err => {
            console.log(err);
          });
        } else {
          alert("登录异常");
        }
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    console.log(this.code);
    console.log(this.phone);
  },
  mounted() {}
};
</script>

<style scoped>
.loginIcode {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: hidden;
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
  color: #000;
}

.pwd-input {
  width: 100%;
  height: 192.41px;
  position: absolute;
  top: 100px;
  left: 0;
  text-align: center;
}
.pwd-input h2 {
  margin: 0;
  font-size: 26px;
}
.pwd-input p {
  margin: 21px 0 55px;
  font-size: 13px;
  color: #333;
}
.van-password-input ul {
  padding: 11px 55px;
  box-sizing: border-box;
  height: 75px;
}
.van-password-input li {
  border: 1px solid #ccc;
  width: 51px;
  height: 51px;
}

/* .van-number-keyboard {
  bottom: 50px;
} */
</style>