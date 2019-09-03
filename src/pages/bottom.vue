<template>
  <div class="bottom">
    <van-tabbar v-model="active" active-color="#000" inactive-color="#ccc" route class="footer">
      <van-tabbar-item
        :icon="item.icon"
        v-for="item in menu"
        :key="item.name"
        :to="item.path"
        replace
        class="footer-item"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      menu: [
        {
          name: "home",
          text: "首页",
          path: "/home",
          icon: "wap-home",
          color: ""
        },
        {
          name: "chayu",
          text: "茶语",
          path: "/chayu",
          icon: "gift-card-o"
        },
        {
          name: "shopcart",
          text: "购物车",
          path: "/shopcart",
          icon: "shopping-cart-o"
        },
        {
          name: "mine",
          text: "我的",
          path: "/mine",
          icon: "user-o"
        }
      ]
    };
  }
};
</script>