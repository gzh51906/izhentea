<template>
  <van-grid :column-num="5" :border="false" class="grid">
    <van-grid-item class="my-ico" @click="goto">
      <van-image
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/c9420376-4849-4bae-b802-5e96e60745bd.jpg"
      />
      <span>碧螺春</span>
    </van-grid-item>
    <van-grid-item class="my-ico" @click="goto">
      <van-image
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/6/ee69e77f-8761-43e6-a6d9-56ea82f1e4e4.jpg"
      />
      <span>普洱</span>
    </van-grid-item>
    <van-grid-item class="my-ico" @click="goto">
      <van-image
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/a571da6c-56b3-441e-8688-d23a09f70382.jpg"
      />
      <span>龙井</span>
    </van-grid-item>
    <van-grid-item class="my-ico" @click="goto">
      <van-image
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/6/07720579-d836-404d-ae3b-03903b6fa77c.jpg"
      />
      <span>大红袍</span>
    </van-grid-item>
    <van-grid-item class="my-ico" @click="goto">
      <van-image
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/6/f903ae25-b519-4e82-98bc-070edae719ba.jpg"
      />
      <span>茶器</span>
    </van-grid-item>
    <van-grid-item class="my-ico" @click="goto">
      <van-image
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/2af76cee-c0f8-4be7-9331-01a12b6c3da1.jpg"
      />
      <span>岩茶</span>
    </van-grid-item>
    <van-grid-item class="my-ico" @click="goto">
      <van-image
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/8/ce60014a-c983-46ad-a2d2-620f1a96f667.jpg"
      />
      <span>安吉白茶</span>
    </van-grid-item>
    <van-grid-item class="my-ico" @click="goto">
      <van-image
        src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/6/04faa415-c655-4995-97b7-ccf25976e84e.jpg"
      />
      <span>白茶</span>
    </van-grid-item>
  </van-grid>
</template>
<script>
export default {
  methods: {
    goto() {
      this.$router.push("/list");
    }
  }
};
</script>
<style scoped>
.van-grid {
  background: #fff;
}
.my-ico {
  text-align: center;
  height: 75px;
  position: relative;
  font-family: "my-icon";
}
.my-ico img {
  width: 50px;
  height: 50px;
  margin: auto;
}
.my-ico span {
  position: absolute;
  bottom: 8px;
  line-height: 16px;
  font-size: 14px;
  color: #333;
}
.van-grid-item {
  margin-left: 1rem;
}
.van-grid-item span {
  position: absolute;
  bottom: -0.1rem;
}
</style>
