<template>
  <div class="goodsbuy">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" :info="shop.length" :to="{path:'/Shopcart'}" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton()" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  props: ["list"],

  data() {
    return {
      shop: {}
    };
  },

  created() {
    this.shopnum();
  },

  methods: {
    onClickButton() {
      this.$axios
        .post("http://47.96.238.230:1906/cartlist", {
          price: this.list.price,
          content: this.list.content,
          src: this.list.src,
          pkid: this.list.pkid
        })
        .then(() => {
          this.shopnum();
        });
    },

    shopnum() {
      let data = this.$axios
        .get("http://47.96.238.230:1906/cartlist", {})
        .then(({ data: { data } }) => {
          this.shop = data;
        });
    }
  }
};
</script>