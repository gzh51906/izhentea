<template>
    <div class="address">
        <div class="head">
            <van-nav-bar title="添加地址" left-text="" left-arrow @click-left="onClickLeft"/>
        </div>
        <div class="add">
            <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            @save="onSave"
            @delete="onDelete"/>
        </div>
    </div>
</template>

<script>

import areaList from "../assets/area"
export default {
  name: "addressEdit",
  components: {},

  data() {
    return {
      areaList
    }
  },

  methods: {
    onSave(e) {
      let data = {};
      data.name = e.name;
      data.tel = e.tel;
      data.address = e.province + e.city + e.county + e.addressDetail;
      data.areaCode = e.areaCode;
      data.isDefault = e.isDefault;
      data.postalCode = e.postalCode;
      console.log(data)
    },

    onDelete() {},

    onClickLeft(){
      this.$router.go(-1);
    }
    
  }
}

</script>

<style scoped>

.add{
    position: relative;
    top: 60px;
}

</style>