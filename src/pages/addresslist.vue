<template>
  <div class="addresslist">
    <div class="head">
      <van-nav-bar title="我的地址" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="addressnav">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        @select="onselect"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "addresslist",
  components: {},
  data() {
    return {
      chosenAddressId: "0",
      list: []
    };
  },

  mounted() {
    let addressList = this.$store.state.shopcart.address;
    addressList.forEach((element, idx) => {
      element.id = idx + "";
      if (element.isDefault) {
        this.chosenAddressId = element.id;
      }
    });
    this.list = addressList;
  },

  methods: {
    onselect(path) {
      this.$router.push({ path: "/pay" });
    },

    onAdd(path) {
      this.$router.push({ path: "/address" });
    },

    onEdit(item, index) {
      this.$router.push({ path: "/address", query: { idx: index } });
    },

    onClickLeft() {
      this.$router.push({ path: "/pay" });
    }
  }
};
</script>

<style scoped>
.addressnav {
  position: relative;
  top: 60px;
}
</style>