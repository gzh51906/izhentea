<template>
  <van-row gutter="2" class="wrapper">
    <van-col span="12" class="pixels">
      <img src="../img/floor price.jpg" alt />
    </van-col>
    <van-col span="12" class="pixels" @click="goto">
      <img src="../img/good tea.jpg" alt />
    </van-col>
  </van-row>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goto() {
      this.$router.push({
        name: "special"
      });
    }
  },
  async created() {}
};
</script>
<style scoped>
img{width: 100%;height: 100%;}
</style>
