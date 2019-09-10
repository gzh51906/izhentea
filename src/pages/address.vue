<template>
  <div class="address">
    <div class="head">
      <van-nav-bar title="添加地址" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="add">
      <van-address-edit
        :area-list="areaList"
        :show-delete="isShowDeleteBtn"
        :address-info="addressInfo"
        show-postal
        show-set-default
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import areaList from "../assets/area";
import { mapMutations } from "vuex";

export default {
  name: "Address",
  components: {},

  data() {
    return {
      queryIdx: "",
      areaList,
      isShowDeleteBtn: false,
      addressInfo: {}
    };
  },

  created() {
    if (this.$route.query.idx >= 0) {
      this.queryIdx = this.$route.query.idx;
      this.addressInfo = this.$store.state.shopcart.address[
        this.$route.query.idx
      ];
      this.isShowDeleteBtn = true;
    }
  },

  methods: {
    onSave(e) {
      let data = {};
      data.name = e.name;
      data.tel = e.tel;
      data.address = e.province + e.city + e.county + e.addressDetail + "";
      data.areaCode = e.areaCode;
      data.isDefault = e.isDefault;
      data.postalCode = e.postalCode;
      data.addressDetail = e.addressDetail;

      if (this.queryIdx !== "") {
        this.editAddress({ data: data, idx: this.queryIdx });
      } else {
        this.saveAddress(data);
      }

      this.$router.push({ path: "/addresslist" });
    },

    onDelete(e) {
      this.removeAddress(this.idx);
      this.$router.push({
        path: "/addresslist"
      });
    },

    ...mapMutations(["saveAddress", "removeAddress", "editAddress"]),

    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.add {
  position: relative;
  top: 60px;
}
</style>