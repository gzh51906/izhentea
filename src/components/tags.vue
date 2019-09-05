<template>
    <div><div class="recommend-text border-bottom">
      <img
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/5/7b2addc9-14b0-4504-b8bf-d9c1362bc4dc.jpg"
        alt
      />
    </div>
    <van-grid :column-num="3" :border="false" class="brandWraper">
  <van-grid-item
    v-for="value in 9"
    :key="value"
    icon="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/5/c253ea55-a79e-4f94-b75d-b8174c057f7e.jpg"
    text="老同志" class="my-icon"
  />
</van-grid></div>
</template>
<script>
export default {};
</script>
<style>
.brandWraper {
  width: 95%;
  margin: auto;
}
</style>
