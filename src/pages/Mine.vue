<template>
  <div class="mine">
    <van-row type="flex" class="header" justify="center">
      <van-col span="24" class="imgbox" @click="goto('login')" v-if="logined">
        <img src="../assets/下载.png" alt />
        <p class="nothing"></p>
        <span>登录/注册</span>
      </van-col>
      <van-col span="24" class="imgbox" v-else>
        <div @click="logout">
          <img src="../assets/下载.png" alt />
          <p class="nothing"></p>
          <span>蔡徐坤（已登录）</span>
        </div>
      </van-col>
      <van-col span="24" class="numltemWraper">
        <van-row type="flex" justify="center" class="numltems">
          <van-col span="6" v-for="item in menu" :key="item.name">
            <p class="num">{{item.num}}</p>
            <p class="text">{{item.name}}</p>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row class="mylist" type="flex" justify="space-between">
      <van-row type="flex" justify="space-between" class="mylist-mine">
        <span>我的订单</span>
        <van-icon name="arrow"></van-icon>
      </van-row>
      <van-row class="sign">
        <van-col span="6" class="sign-item" v-for="item in signItem" :key="item.text">
          <van-icon :name="item.icon"></van-icon>
          <span>{{item.text}}</span>
        </van-col>
      </van-row>
    </van-row>
    <van-row tag="ul">
      <van-row
        type="flex"
        justify="space-between"
        v-for="item in list"
        :key="item.text"
        class="list-item"
      >
        <span>{{item.text}}</span>
        <van-icon name="arrow"></van-icon>
      </van-row>
    </van-row>
    <van-row class="server">
      <van-col span="24" class="server-item">
        <span>客服</span>
        <van-icon name="arrow"></van-icon>
      </van-col>
    </van-row>
    <bot></bot>
  </div>
</template>

<script>
import bot from "./bottom.vue";
export default {
  data() {
    return {
      menu: [
        {
          name: "收藏",
          num: 0
        },
        {
          name: "足迹",
          num: 0
        },
        {
          name: "茶银（两）",
          num: 0
        },
        {
          name: "优惠券",
          num: 0
        }
      ],
      signItem: [
        {
          text: "待付款",
          icon: "pending-payment"
        },
        {
          text: "待发货",
          icon: "logistics"
        },
        {
          text: "待收货",
          icon: "tosend"
        },
        {
          text: "待评价",
          icon: "flower-o"
        }
      ],
      list: [
        { text: "个人资料" },
        { text: "收货地址" },
        { text: "足迹" },
        { text: "我的收藏" }
      ]
    };
  },
  computed: {
    logined() {
      let datalocal = localStorage.getItem("Authorization");
      let datastore = this.$store.state.common.authorization;

      if (datalocal) {
        return !datalocal;
      } else if (!datastore) {
        return !datastore;
      }
    }
  },
  methods: {
    goto(path) {
      this.$router.push({ path });
    },
    logout() {
      this.$store.commit("logout");
    }
  },
  components: {
    bot
  },
  created() {
    // console.log(this.$route);
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  height: 100%;
}
.mine {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background: rgb(233, 223, 223);
}
.header {
  width: 100%;
  height: 226.31px;
  background: url(../assets/userbg.8b94fc1.png);
  display: flex;
  flex-direction: column;
  color: #ffffff;
  position: relative;
}
.imgbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  top: 60px;
}
.imgbox .nothing {
  width: 100%;
  height: 10px;
  margin: 0;
}
.header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.numltemWraper {
  width: 100%;
  height: 68px;
  position: absolute;
  padding: 0 11px;
  left: 0;
  bottom: -10px;
}
.numltems {
  width: 100%;
  height: 68px;
  background: rgb(100, 100, 100);
  color: #ffffff;
  text-align: center;
}
.numltems .van-col {
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
}
.numltems .van-col .num {
  font-size: 16px;
  margin: 10px 0 5px;
}
.numltems .van-col .text {
  width: 100%;
  margin: 0 0 5px;
  font-size: 13px;
  color: #ffffff;
}
.mylist {
  height: 132.45px;
  display: flex;
  flex-direction: column;
  margin: 16px 12px 10px;
  padding: 0 12px 0 14px;
  background: #ffffff;
  font-size: 16px;
}

.mylist .mylist-mine {
  display: flex;
  align-items: center;
  height: 48px;
}
.sign-item {
  height: 83.89px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}
.sign-item .van-icon {
  font-size: 23px;
}
.sign-item span {
  font-size: 15px;
}
ul {
  height: 194.25px;
  display: flex;
  flex-direction: column;
  margin: 0 12px 10px;
  background: #ffffff;
  font-size: 16px;
}
.list-item {
  /* display: flex;
  justify-content: space-between; */
  align-items: center;
  flex: 1;
  padding: 0 11px 0 16px;
}

.server {
  margin: 12px;
  height: 48px;
  background: #ffffff;
}
.server .server-item {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 11px 0 16px;
  font-size: 16px;
}
</style>