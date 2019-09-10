<template>
  <div>
    <div class="recommend-text border-bottom">
      <img
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/5/7b2addc9-14b0-4504-b8bf-d9c1362bc4dc.jpg"
        alt
      />
    </div>
    <van-grid :column-num="3" :border="false" class="brandWraper">
      <van-grid-item
        icon="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/5/c253ea55-a79e-4f94-b75d-b8174c057f7e.jpg"
        text="老同志"
        class="my-icon"
      />
      <van-grid-item
        icon="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/6/1882fb05-ee70-42ee-8fb8-c4b184de8d27.jpg"
        text="川茶"
        class="my-icon"
      />
      <van-grid-item
        icon="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/5/d862abdd-48c1-4075-9737-78a0c1c5a390.jpg"
        text="中茶"
        class="my-icon"
      />
      <van-grid-item
        icon="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/e18a614c-ef97-4a4a-a418-00f7dbafcc47.jpg"
        text="雨林"
        class="my-icon"
      />
      <van-grid-item
        icon="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/5/9e7e7b11-55da-44a7-8b94-20c6c69ce76d.jpg"
        text="下关"
        class="my-icon"
      />
      <van-grid-item
        icon="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/6/89cfe824-d8d5-4a34-8d33-65cafc97f793.jpg"
        text="谢裕大"
        class="my-icon"
      />
      <van-grid-item
        icon="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/6/d1f11f4f-c55e-46bb-aa3c-ee8867fa5f69.jpg"
        text="狮峰"
        class="my-icon"
      />
      <van-grid-item
        icon="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/7/92dbcfdd-3222-47ed-bf9d-d5d08771b3ed.jpg"
        text="成艺"
        class="my-icon"
      />
      <van-grid-item
        icon="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/5/fbeff143-0cad-45a0-9e48-9e062e2c6d65.jpg"
        text="蒲门茶业"
        class="my-icon"
      />
    </van-grid>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.recommend-text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.recommend-text img {
  width: 139px;
  height: 26px;
}

.brandWraper {
  padding: 15px;
  background: #fff;
  width: 95%;
  margin: auto;
}
.my-icon {
  text-align: center;
  position: relative;
  font-family: "my-icon";
}
.my-icon img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -73%);
  width: 50px;
  height: 50px;
  margin: auto;
  margin-bottom: 5px;
}
</style>
