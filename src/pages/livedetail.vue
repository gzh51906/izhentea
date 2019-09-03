<template>
  <div class="detail">
    <div class="top">
      <span>
        <van-icon name="arrow-left" />
      </span>
    </div>
    <div class="main">
      <p class="title">视频丨易武为后，煮茶论剑</p>
      <div class="touxiang">
        <img src="../img/touxiang.jpg" alt />
        <span>茶臻选</span>
      </div>
      <div class="word">
        <p class="text">
          <img src="../img/dat.jpg" alt />
        </p>
        <p class="text">说到普洱，广为流传这么一句话“班章为王，易武为后”。班章茶气刚烈，厚重醇香，霸气十足，王者风范。易武口感细腻，汤中带甜，如王后般温柔典雅。</p>
        <p
          class="text"
        >每个人都有自己的偏好，有人喜欢轰轰烈烈，有人喜欢平淡简单，还有人时而喜欢浓烈时而喜欢平静。同样，喝茶也会根据个人喜好不同、心境不同而有所不同。有人喜欢班章，有人喜欢易武，品味没有好坏之分，喜欢的就是最好的。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.top {
  padding: 0.2rem;
  display: flex;
  justify-content: flex-start;
}
.top span {
  width: 0.64rem;
  height: 0.933333rem;
}
.top span .van-icon {
  margin-top: 0.2rem;
  display: block;
  font-size: 0.56rem;
  color: #999;
}
.main {
  padding: 0.4rem;
}
.main .title {
  font-size: 0.533333rem;
  font-weight: 700;
  color: #333;
  line-height: 0.533333rem;
}
.main .touxiang {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.266667rem 0;
}
.touxiang img {
  width: 0.533333rem;
  height: 0.533333rem;
  border-radius: 50%;
  margin-right: 0.133333rem;
}
.touxiang span {
  color: #666;
  font-size: 0.32rem;
  line-height: 0.533333rem;
  height: 0.533333rem;
}
.word {
  width: 100%;
  white-space: pre-wrap;
}
.main .text {
  width: 100%;
  font-size: medium;
  line-height: 2;
  letter-spacing: 2px;
  margin-bottom: 0.266667rem;
}
.main .text img {
  width: 100%;
}
</style>