<template>
  <div class="jiesuan">
    <div class="head">
      <van-nav-bar title="确认信息" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="shoplist">
      <div class="addressinp">
        <van-cell value="还没有地址信息，请点击后添加地址" icon="location" is-link @click="goadd" />
        <div class="paybox">
          <p>支付方式</p>
          <van-cell title="微信" icon="wechat">
            <van-icon slot="right-icon" name="checked" style="line-height: inherit;" />
          </van-cell>
        </div>
<<<<<<< HEAD
        <div class="shoptitle">
          <p>商品详情</p>
        </div>
      </div>
=======
        <div class="shoplist">
            <div class="addressinp"> 
                <van-cell value="还没有地址信息，请点击后添加地址" icon="location" is-link @click="goadd"/>
                <div class="paybox">
                    <p>支付方式</p>
                    <van-cell title="微信" icon="wechat">
                        <van-icon slot="right-icon" name="checked" style="line-height: inherit;"/>
                    </van-cell>
                </div>
                <div class="shoptitle">
                    <p>商品详情</p>
                    <li v-for="item in shop" :key="item.pkid">
                        <van-card :price="item.price" :title="item.content" :thumb="item.src" :num="item.qty" class="boxpracepay"/>
                    </li>
                </div>
            </div>
        </div>
        <van-submit-bar :price="totalprice(shop)" button-text="去支付" @submit="onSubmit"></van-submit-bar>
>>>>>>> dev
    </div>
    <van-submit-bar :price="0" button-text="去支付" @submit="onSubmit"></van-submit-bar>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      onSubmit: ""
    };
  },

  methods: {
    goadd(path) {
      this.$router.push({ path: "/addresslist" });
    },

    onClickLeft() {
      this.$router.push({ path: "/Shopcart" });
=======
    data(){
        return{
            onSubmit:"",
            shop: [],
        }
    },

    async created () {
        let data = await this.$axios.get("http://localhost:1906/cartlist", {
            
        }).then(({data: {data}})=>{
            this.shop = data;
        })
    },

    methods: {
        goadd(path){
            this.$router.push({path:'/addresslist'})
        },

        onClickLeft(){
            this.$router.push({path:"/Shopcart"});
        },

        totalprice(shop){ 
            return shop.reduce(function(prev,item){       
                return prev + item.price*item.qty*item.num*100   
            },0) 
        }, 
>>>>>>> dev
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

<<<<<<< HEAD
body {
  background: #f2f2f2;
=======
ul,li{list-style: none;}

body{
    background: #f2f2f2;
>>>>>>> dev
}

.head {
  width: 100%;
  height: 44px;
  background: white;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  text-align: center;
  line-height: 44px;
  z-index: 999;
  color: #999;
}

.spa {
  position: absolute;
  left: 20px;
  top: 5px;
}

.shoplist {
  width: 100%;
  height: 642px;
  /* background: yellow; */
  position: relative;
  top: 44px;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.addressinp {
  width: 400px;
  height: 50px;
  background: white;
  margin-top: 10px;
}

.paybox p,
.shoptitle p {
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 15px;
}
<<<<<<< HEAD
=======

.shoptitle li{
    position: relative;
    width: 414px;
    height: 106px;
}

.boxpracepay{
    width: 380px;
    position: absolute;
    left: 12px;
}



>>>>>>> dev
</style>