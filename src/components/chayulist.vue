<template>
  <div class="yu-list">
    <van-row>
      <van-col span="22" offset="1">
        <div class="list-left">
          <p class="list-left-text">茶，让淡雅的日子，氤氲着淡淡鄂香</p>
          <div class="list-left-bottom">
            <div class="img-left">
              <img src="../img/cyfx.jpg" alt />
              <span>茶业复兴</span>
            </div>
            <div class="img-right">
              <van-icon name="eye-o" />
              <span>1人看过</span>
            </div>
          </div>
        </div>
        <div class="list-right">
          <img src="../img/list.jpg" alt />
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.van-col {
  background: #fff;
  padding: 0.266667rem;
  margin-bottom: 0.266667rem;
  padding-top: 0.533333rem;
  display: flex;
  justify-content: space-between;
}
.list-left {
  flex: 1;
  margin-right: 0.266667rem;
}
.list-right {
  height: 2rem;
  width: 2.666667rem;
}
.list-right img {
  width: 100%;
  height: 100%;
}
.list-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list-left-text {
  font-size: 0.4rem;
  line-height: 0.533333rem;
}
.list-left-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img-left {
  display: flex;
  align-items: center;
}
.img-left img {
  width: 0.533333rem;
  height: 0.533333rem;
  border-radius: 50%;
}
.img-left span {
  color: #666;
  font-size: 0.32rem;
}
.img-right {
  display: flex;
  align-items: center;
}
.img-right .van-icon {
  font-size: 0.346667rem;
}
.img-right span {
  display: inline-block;

  color: #999;
  font-size: 0.32rem;
}
</style>