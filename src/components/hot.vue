<template>
  <div class="hot">
    <van-row>
      <van-col span="22" offset="1">
        <p class="title">视频|易武为后，煮酒论剑</p>
        <div class="show">
          <img src="../img/li.jpg" alt />
        </div>
        <div class="show-bottom">
          <div class="text-left">
            <img src="../img/touxiang.jpg" alt />

            <span>茶臻选</span>
          </div>
          <p class="text-right">
            <van-icon name="eye-o" />
            <span>412人看过</span>
          </p>
        </div>
      </van-col>
    </van-row>
    <!-- <chayulist></chayulist> -->
  </div>
</template>

<script>
// import chayulist from "./chayulist.vue";
export default {
  data() {
    return {};
  },
  components: {
    // chayulist
  }
};
</script>

<style  scoped>
.van-col {
  background: #fff;
  padding: 0.6rem;
  margin-bottom: 0.666667rem;
}
.title {
  text-align: left;
  font-size: 1.066667rem;
  margin: 0.666667rem 0;
}
.show img {
  width: 100%;
  height: 100%;
}
.show-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-left {
  /* float: left;
  width: 1.866667rem;
  height: 0.533333rem;
  line-height: 0.533333rem; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.text-left img {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  float: left;
  margin-right: 0.35rem;
}
.text-left span {
  color: #666;
  font-size: 0.84rem;
  line-height: 0.84rem;
  /* height: 0.533333rem; */
  float: left;
}
/* .show-bottom {
  margin-top: 0.266667rem;
  overflow: hidden;
} */
.text-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-right .van-icon {
  font-size: 1.04rem;
  display: inline-block;
  /* height: 0.84rem; */
  /* width: 0.84rem; */
  line-height: 0.426667rem;
  margin-right: 0.266667rem;
}
.text-right span {
  display: inline-block;

  color: #999;
  font-size: 0.84rem;
  line-height: 0.84rem;
}
</style>