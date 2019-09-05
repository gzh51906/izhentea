<template>
  <div class="list">
    <!-- 头部 -->
    <div class="top" ref="top">
      <van-icon ref="left" name="arrow-left" @click="goto" />
      <span ref="span">好茶</span>
      <van-icon ref="home" name="wap-home" @click="goto" />
    </div>
    <div class="bg">
      <img src="../img/long.jpg" alt />
      <span class="bg-text">好茶</span>
    </div>
    <!-- 筛选 -->
    <div class="select">
      <div class="list-check">
        <p class="left" @click="act(1)" v-bind:class="[cur==1?'act active':'' ]">综合</p>
        <p class="center" @click="xiao(2)" v-bind:class="[cur==2?'act active':'' ]">
          销量
          <span>
            <van-icon name="arrow-up" />
            <van-icon name="arrow-down" />
          </span>
        </p>
        <p class="right" @click="sale(3)" v-bind:class="[cur==3?'act active':'' ]">
          价格
          <span>
            <van-icon name="arrow-up" />
            <van-icon name="arrow-down" />
          </span>
        </p>
      </div>
      <!-- 商品列表 -->
      <ul class="goods">
        <li class="goods-list" v-for="item in list" :key="item._id">
          <div class="goods-src">
            <img :src="item.src" alt />
          </div>
          <p class="goods-text">{{item.content}}</p>
          <p class="goods-price">￥{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { cur: 1, list: [] };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 165) {
        // this.cur = 1;
        this.$refs.top.classList.add("cur");
        this.$refs.home.classList.add("icon");
        this.$refs.left.classList.add("icon");
        this.$refs.span.classList.add("cur-text");
      } else {
        // this.cur = 0;
        this.$refs.top.classList.remove("cur");
        this.$refs.home.classList.remove("icon");
        this.$refs.left.classList.remove("icon");
        this.$refs.span.classList.remove("cur-text");
      }
      //   console.log(this.cur);
    },
    act(a) {
      this.cur = a;
    },
    async sale(a) {
      this.cur = a;
      let { data } = await this.$axios.get(
        "http://localhost:1906/yulist/goodslist",
        { params: { sort: "price" } }
      );
      //   console.log(data.data);
      let b = parseInt(Math.random() * 21 + 20);
      this.list = data.data.slice(b, b + b);
    },
    async xiao(a) {
      this.cur = a;
      let { data } = await this.$axios.get(
        "http://localhost:1906/yulist/goodslist",
        { params: { sort: "price", asc: true } }
      );
      //   console.log(data.data);
      let b = parseInt(Math.random() * 21 + 20);
      this.list = data.data.slice(b, b + b);
    },
    goto() {
      this.$router.push({ name: "home" });
    }
  },
  async created() {
    let { data } = await this.$axios.get(
      "http://localhost:1906/yulist/goodslist",
      {}
    );
    // console.log(data.data);
    let a = parseInt(Math.random() * 21 + 20);
    this.list = data.data.slice(a, a + a);
  }
};
</script>

<style scoped>
.list {
  width: 100%;
  padding: 0;
  background: #f2f2f2;
}
.list .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 1rem;
}
.top .van-icon {
  font-size: 1.3rem;
  color: #fff;
}
.top span {
  display: none;
}
/* 达到条件时改变样式 */
.list .cur {
  background: #fff;
}
.top .icon {
  color: #000;
}
.top .cur-text {
  display: block;
}

/* -- */

.bg {
  width: 100%;
  /* height: 6rem; */
  position: relative;
  top: 0;
}
.bg img {
  width: 100%;
  height: 100%；;
}
.bg-text {
  font-size: 1.9rem;
  font-weight: 700;
  color: #ffffff;
  position: absolute;
  bottom: 1.6rem;
  z-index: 1;
  left: 2rem;
}
/* <!-- 筛选 --> */
.select {
  position: relative;
  top: -1.5rem;
}
.list-check {
  margin: 0 1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0.7rem 0.4rem;
}
.left,
.center,
.right {
  position: relative;
  width: 33.33%;
  text-align: center;
}
/* 文字选中状态 */
.act::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -3px;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background-color: #333;
}
.act::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #000;
}
/* 文字选中状态 */
.active {
  font-weight: 700;
  font-size: 1rem;
}
.center {
  display: flex;
  justify-content: center;
}
.center span {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 2rem;
}
.center span .van-icon {
  font-size: 0.4rem;
}
.right {
  display: flex;
  justify-content: center;
}
.right span {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 2rem;
}
.right span .van-icon {
  font-size: 0.4rem;
}
/* 商品列表 */
.goods {
  padding: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.goods .goods-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  padding-bottom: 0.18rem;
  box-sizing: border-box;
  background-color: #fff;
  padding: 1rem 1rem 1.3rem;
  border: 1px solid #f2f2f2;
}
.goods-src {
  width: 9.5rem;
  height: 9.5rem;
  margin: 0 auto;
  /* padding: 0.6rem; */
  /* width: 100%; */
}
.goods-src img {
  width: 100%;
  height: 100%;
  border: 1px solid #999;
}
.goods-text {
  margin-top: 0.4rem;
  padding-top: 0.4rem;
  color: #333;
  font-size: 0.8rem;
  line-height: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  border-top: 1px solid #999;
}
.goods-price {
  font-size: 0.8rem;
  font-weight: 700;
  padding-top: 0.7rem;
  color: #d45949;
}
</style>