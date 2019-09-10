<template>
  <div class="shopcar">
    <div class="head">
      <van-nav-bar title="购物车" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <ul class="shopbox">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <li v-for="item in shop" :key="item.pkid">
          <div class="radius">
            <van-checkbox
              v-model="item.num"
              @change="onChecked(item.qty,item.pkid,item.num)"
              icon-size="15px"
              checked-color="red"
              class="radiusbox"
            ></van-checkbox>
          </div>
          <van-card :price="item.price" :title="item.content" :thumb="item.src" class="boxprace" />
          <van-stepper
            v-model="item.qty"
            @change="onChange(item.qty,item.pkid,item.num)"
            @plus="onChange(item.qty,item.pkid,item.num)"
            @minus="onChange(item.qty,item.pkid,item.num)"
            class="fuhao"
          />
        </li>
      </van-list>
    </ul>
    <van-submit-bar
      :price="totalprice(shop)"
      button-text="结算"
      @submit="onSubmit('pay')"
      style="bottom:74px"
    >
      <van-checkbox v-model="checked" checked-color="red" @click="allChecked">全选</van-checkbox>
    </van-submit-bar>
    <bot></bot>
  </div>
</template>


<script>
import bot from "./bottom.vue";
export default {
  data() {
    return {
      checked: true,
      list: [],
      shop: [],
      loading: false,
      finished: false
    };
  },

  components: {
    bot
  },

  async created() {
    let data = await this.$axios
      .get("http://localhost:1906/cartlist", {})
      .then(({ data: { data } }) => {
        this.shop = data;
      });

    if (this.shop.every(item => item.num == true)) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  },

  methods: {
    onChecked(value, id, num) {
      this.$axios.patch("http://localhost:1906/cartlist/", {
        pkid: id,
        qty: value,
        num: num
      });
      // console.log(num);
      console.log(this.shop.every(item => item.num == true), "-------");

      if (this.shop.every(item => item.num == true)) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },

    onClickLeft() {
      this.$router.go(-1);
    },

    onChange(value, id, num) {
      this.$axios.patch("http://localhost:1906/cartlist/", {
        pkid: id,
        qty: value,
        num: num
      });
    },

    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },

    onSubmit(path) {
      this.$router.push({ path });
    },

    totalprice(shop) {
      return shop.reduce(function(prev, item) {
        return prev + item.price * item.qty * item.num * 100;
      }, 0);
    },

    allChecked() {
      // console.log(checked,this.shop);
      if (this.checked != true) {
        for (var i = 0; i < this.shop.length; i++) {
          this.shop[i].num = true;
        }
      } else {
        for (var i = 0; i < this.shop.length; i++) {
          this.shop[i].num = false;
        }
      }
    }
  }
};
</script>


<style scoped>
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
}

.spa {
  font-size: 18px;
}

.spb {
  font-size: 15px;
  position: absolute;
  right: 20px;
}

.shopbox {
  width: 100%;
  height: 574px;
  background: #f2f2f2;
  position: relative;
  top: 44px;
  overflow: auto;
}

.shopbox li {
  position: relative;
  width: 414px;
  height: 115px;
}

.radius {
  width: 30px;
  height: 115px;
  position: absolute;
  left: 0px;
  top: 0px;
}

.radiusbox {
  position: absolute;
  top: 50px;
  left: 7px;
}

.boxprace {
  width: 380px;
  position: absolute;
  left: 30px;
}

.fuhao {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
</style>