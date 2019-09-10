<template>
  <div class="special">
    <div class="back-wrap" @click="onClickLeft">
      <img src="../img/left-greater.png" alt />
    </div>
    <div class="heade">
      <div class="headimg"></div>
      <div class="titl">
        <van-tabs type="card">
          <van-tab title="无忧退">赠送品鉴小样，不满意整饼(罐)包退</van-tab>
          <van-tab title="随心买">可选择小规格（10g，20g）购买</van-tab>
          <van-tab title="全场包邮">平台所有商品享受包邮服务</van-tab>
        </van-tabs>
      </div>
      <div class="centertitle"></div>
      <div class="centersub">
        <van-grid :border="false" :column-num="3" class="dong">
          <van-grid-item>
            <img
              src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/5/10a15ba8-0c9e-4ef5-9f3a-ad0170c1f79c.jpg"
            />
            <p>同德茶铺 澜沧云巅 2018年普洱生茶</p>
            <span>￥ 128</span>
          </van-grid-item>
          <van-grid-item>
            <img
              src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/3/782fa65c-003f-4989-a211-e59a5d48a825.jpg"
            />
            <p>八角亭 至尊茶王青饼 2006年普洱生茶</p>
            <span>￥ 260</span>
          </van-grid-item>
          <van-grid-item>
            <img
              src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/3/7d1503c6-875c-4715-9c39-2409bc62335a.jpg"
            />
            <p>同德茶铺 澜沧云巅 2018年普洱生茶</p>
            <span>￥ 128</span>
          </van-grid-item>
          <van-grid-item>
            <img
              src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/4/ad095cff-fbe5-44df-9f61-4b5e1dfb6130.jpg"
            />
            <p>同德茶铺 澜沧云巅 2018年普洱生茶</p>
            <span>￥ 128</span>
          </van-grid-item>
          <van-grid-item>
            <img
              src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/5/91f4ba27-5b21-4f47-a130-e57e731febd0.jpg"
            />
            <p>同德茶铺 澜沧云巅 2018年普洱生茶</p>
            <span>￥ 128</span>
          </van-grid-item>
          <van-grid-item>
            <img
              src="https://osstea.oss-cn-huhehaote.aliyuncs.com/user/2019/3/01f3d266-1b93-4eb2-a89b-28524036e34f.jpg"
            />
            <p>同德茶铺 澜沧云巅 2018年普洱生茶</p>
            <span>￥ 128</span>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="centerfoot"></div>
    </div>
    <div class="botto">
      <van-row class="bost">
        <van-col
          :span="12"
          class="img-wrappe"
          v-for="data in list"
          :key="data._id"
          @click="goto(data._id)"
        >
          <img :src="data.src" alt />
          <span class="te">{{data.content}}</span>
          <div>
            <span class="pri">￥ {{data.price}}</span>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goto(_id) {
      this.$router.push({
        name: "goodsdetail",
        params: {
          _id
        }
      });
    }
  },
  async created() {
    let data = await this.$axios
      .get("http://localhost:1906/goods", {
        params: {
          act: "index"
        }
      })
      .then(({ data: { data } }) => {
        // console.log(data);
        //数据格式化
        this.list = data;
      });
  }
};
</script>
<style scoped>
.heade {
  width: 100%;
  height: 900px;
  background: #b43929;
}
.back-wrap {
  z-index: 1;
  padding: 15px;
  position: absolute;
}
.back-wrap img {
  width: 30px;
  height: 30px;
}
.headimg {
  width: 100%;
  height: 290px;
  background-image: url(../img/banner.png);
  background-size: cover;
}
.titl {
  width: 95%;
  height: 120px;
  padding: 27.5px;
  margin: auto;
  background-image: url(../img/titel.png);
  background-size: cover;
}
.van-tabs {
  padding-top: 0;
}
.van-tab__pane {
  margin-top: 15px;
  font-weight: bold;
  color: rgb(127, 34, 21);
  text-align: center;
}
.centertitle {
  width: 212px;
  height: 43px;
  margin: auto;
  background-image: url(../img/titlef.png);
  background-size: cover;
}
.centersub {
  padding-top: 15px;
  width: 350px;
  height: 367px;
  margin: auto;
  background-image: url(../img/center.png);
  background-size: cover;
}
.dong {
  position: relative;
  width: 315px;
  margin: auto;
}
.dong img {
  width: 85px;
  height: 85px;
}
.dong p {
  font-size: 12px;
  color: #333;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 85px;
}
.dong span {
  position: absolute;
  left: 8px;
  bottom: 0;
  font-size: 14px;
  line-height: 28px;
  color: #d45949;
}
.dong .van-grid-item__content {
  height: 150px;
  padding: 10px;
}
.centerfoot {
  width: 100%;
  height: 80px;
  background-image: url(../img/centerfoot.png);
  background-size: cover;
}
.botto {
  width: 100%;
  background: #ffcd93;
  padding: 10px;
}
.bost {
  background: #fff;
}
.img-wrappe {
  position: relative;
  height: 300px;
  padding: 14px;
}
.img-wrappe img {
  width: 150px;
  height: 150px;
}
.te {
  padding-top: 15px;
  font-size: 15px;
  color: #333;
}
.pri {
  position: absolute;
  bottom: 15px;
  font-size: 14px;
  color: #d45949;
}
</style>
