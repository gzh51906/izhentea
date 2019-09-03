<template>
  <div class="other-talk">
    <div class="other-top">
      <div class="user">
        <img src="../img/touxiang.jpg" alt />
        <div class="name">
          <span class="name-top">南方嘉木</span>
          <span class="name-time">一周前</span>
        </div>
      </div>
      <div class="look-right">
        <van-icon name="good-job-o" />
        <span>4</span>
      </div>
    </div>
    <div class="other-word">论剑口感很不错，可以作为日常口粮茶来喝。平时不太喜欢喝生普，感觉比较烈。但是这款比较柔，不错不错。</div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.other-talk {
  padding: 0 0.966667rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.666667rem;
}
.other-talk .other-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.other-talk .other-top .user {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.other-talk .other-top .user img {
  width: 2.033333rem;
  height: 2.033333rem;
  border-radius: 50%;
  margin-right: 0.666667rem;
}
.other-talk .other-top .user .name {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.other-talk .other-top .user .name-top {
  font-size: 0.9066667rem;
  color: #333;
}
.other-talk .other-top .user .name-time {
  font-size: 0.6066667rem;
  color: #999;
}
.look-right {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e8e8e8;
  padding: 0.1rem 0.566667rem;
}
.look-right .van-icon {
  color: #999;
  font-size: 0.9rem;
  margin-right: 0.4rem;
}
.look-right span {
  color: #000;
  font-size: 0.7rem;
}
.other-word {
  color: #333;
  font-size: 0.95rem;
  line-height: 1.1rem;
  margin-top: 0.65rem;
}
</style>