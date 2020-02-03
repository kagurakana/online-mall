<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shopInfo.logo" />
      <span class="title">{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item">
        <div class="info-sells">
          <div class="mid-left">
            <div class="sells-count">{{sellCount}}</div>
            <div class="sells-text">总销量</div>
          </div>
          <div class="mid-left">
            <div class="sells-count">{{shopInfo.goodsCount}}</div>
            <div class="sells-text">全部宝贝</div>
          </div>
        </div>
      </div>
      <div class="shop-middle-item">
        <ul class="mid-right">
          <li v-for="(item, index) in shopInfo.score" :key="index">
            <span>{{item.name}}</span>
            <span class="score" :class="{scoreBetter:item.isBetter}">{{item.score.toFixed(2)}}</span>
            <span class="better" :class="{betterBetter:item.isBetter}">{{item.isBetter?'优':'良'}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object
    }
  },
  computed:{
    sellCount(){
      return this.shopInfo.sells > 10000 ? (this.shopInfo.sells / 10000).toFixed(0) + "万" :this.shopInfo.sells
    }
  }
};
</script>

<style scoped>
.shop-info{
  color: rgb(150, 150, 150);
  font-size: 0.85rem;
}
.shop-top {
  padding-bottom: 12px;
  padding-top: 8px;
  width: 100%;
}
.shop-top img {
  height: 45px;
  border-radius: 50%;
  margin: 8px;
  border: 1px solid rgb(235, 235, 235);
}
.shop-middle {
  display: flex;
}
.shop-middle-item {
  width: 100px;
  flex: 1;
}
.info-sells{
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;

}
.sells-count{
  font-size: 1.3rem;
}
.mid-left{
  width: 50%;
    border-right: 1.5px rgb(235, 235, 235) solid;
}
.mid-right{

}
 li{
  padding: 3px 0;
  list-style: none;
  display: flex;
  justify-content:space-around;
}
.score{
  color:  rgb(75, 192, 75);
}
.scoreBetter{
  color: rgb(226, 63, 63);
}
.better{
  background-color: rgb(75, 192, 75);
  color:white;
}
.betterBetter{
  background-color: rgb(226, 63, 63);
}
</style>