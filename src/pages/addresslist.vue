<template>
    <div class="addresslist">
        <div class="head">
            <van-nav-bar title="我的地址" left-text="" left-arrow @click-left="onClickLeft"/>
        </div>
        <div class="addressnav">
            <van-address-list
             v-model="chosenAddressId"
             :list="list"
             @add="onAdd('address')"
             @edit="onEdit"/>
        </div>
    </div>
</template>

<script>

export default {
  name: "addresslist",
  components: {},
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
    }
  },

  methods: {
    onAdd(name) {
      this.$router.push({name})
    },

    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },

    onClickLeft(){
      this.$router.go(-1);
    }
  }
}

</script>

<style scoped>

.addressnav{
  position: relative;
  top: 60px;
}

</style>