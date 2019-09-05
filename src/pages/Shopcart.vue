<template>
    <div class="shopcar">
       <div class="head">
            <van-nav-bar title="购物车" left-text=""/>
        </div>
       <ul class="shopbox">
           <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <li>
                  <div class="radius">
                     <van-checkbox v-model="checked" icon-size="15px" checked-color="red" class="radiusbox"></van-checkbox>
                  </div>
                  <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"  class="boxprace"/>
                  <van-stepper v-model="value" class="fuhao"/>
              </li>
              
           </van-list>
       </ul>
       <van-submit-bar :price="3050" button-text="结算" @submit="onSubmit('pay')" style="bottom:74px">
           <van-checkbox v-model="checked"  checked-color="red">全选</van-checkbox>
       </van-submit-bar>
       <bot></bot>
    </div>
</template>


<script>
import bot from "./bottom.vue";
export default {
    data(){
        return{checked: true,
               list: [],
               loading: false,
               finished: false,
               value: 1
        }
       
    },
    components: {
            bot,
    },

    computed: {
        
    },

    methods: {
        onLoad(){
            setTimeout(()=>{
                for(let i = 0; i < 10; i++){
                    this.list.push(this.list.length + 1);
                }

                this.loading = false;

                if(this.list.length >= 40){
                    this.finished = true;
                }
            }, 500)
        },

        onSubmit(path){
            this.$router.push({path})
        }
    }

}



</script>


<style>

.head{
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
}

.spa{
    font-size: 18px;
}

.spb{
    font-size: 15px;
    position: absolute;
    right: 20px;
}

.shopbox{
    width: 100%;
    height: 574px;
    background: #f2f2f2;
    position: relative;
    top: 44px;
    overflow: auto;
}

.shopbox li{
    position: relative;
    width: 414px;
    height: 115px;
}

.radius{
    width: 30px;
    height: 115px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.radiusbox{
    position: absolute;
    top: 50px;
    left: 7px;
}

.boxprace{
    width: 380px;
    position: absolute;
    left: 30px;
}

.fuhao{
    position: absolute;
    bottom: 15px;
    right: 15px;
}


</style>