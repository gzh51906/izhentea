<template>
  <div class="yu-goods">
    <p class="title">
      <slot name="title"></slot>
    </p>
    <div class="yu-list">
      <van-card
        v-for="item in list"
        :key="item._id"
        :price="item.price"
        :title="item.content"
        :thumb="item.src"
      >
        <div slot="tags" class="anniu">
          <van-button size="mini">查看</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { list: [] };
  },
  async created() {
    let { data } = await this.$axios.get(
      "http://localhost:1906/yulist/goodslist",
      {}
    );
    let a = parseInt(Math.random() * 100);
    let b = parseInt(Math.random() * 4 + 3);
    this.list = data.data.slice(a, a + b);
  }
};
</script>

<style scoped>
.title {
  padding: 0.966667rem 0.6833333rem;
  margin: 0;
  font-size: 1.166667rem;
}
.yu-list {
  padding: 0.63rem;
}
.anniu {
  position: absolute;
  right: 0;
  bottom: 0;
}
.anniu button {
  width: 3.8rem;
  height: 1.533333rem;
  background: #d45949;
  color: #fff;
}
.anniu button span {
  font-size: 0.79rem;
}
.van-card__title {
  font-size: 1rem;
  margin: 0.2rem 0 0.6rem 0.6rem;
}
.van-card__price {
  margin: 0 0 0.6rem 0.6rem;
  font-size: 0.8rem;
}
.van-card {
  margin-top: 0;
  border-bottom: 1px solid #f2f2f2;
}
</style>