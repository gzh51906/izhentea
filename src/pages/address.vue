<template>
    <div class="address">
        <div class="head">
            <span class="spa"><van-icon name="arrow-left" size="20px"/></span>
            <span>添加地址</span>
        </div>
        <div class="add">
            <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"/>
        </div>
    </div>
</template>

<script>

import areaList from "../assets/area"
export default {
  data() {
    return {
      areaList,
      searchResult: []
    }
  },

  methods: {
    onSave() {
      this.$router.push("/addresslist")
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
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