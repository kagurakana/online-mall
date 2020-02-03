<template>
  <div class="detail">
    <DetailNavBar />
    <Scroll ref="scroll" class="container">
      <DetailSwaper v-if="haveTopImgs" :imgs="topImgs" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shopInfo="shop" />
      <DetailInfo :detailInfo="detailInfo" 
      @detailImageLoad="scrollRefresh"
      />
      <DetailParamInfo :paramInfo="paramInfo"/>
    </Scroll>
  </div>
</template>

<script>
import {debounce} from "common/utils"
import { getDetail, Goods, Shop, GoodParam } from "network/detail";
import Scroll from "components/common/Scroll"
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwaper from "./childComps/DetailSwaper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailInfo from "./childComps/DetailInfo";
import DetailParamInfo from "./childComps/DetailParamInfo"
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    Scroll,
    DetailSwaper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParamInfo
  },
  data() {
    return {
      iid: null,
      topImgs: [],
      haveTopImgs: false,
      goods: {},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{}
    };
  },
  activated() {
    this.haveTopImgs = false;
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      this.topImgs = data.itemInfo.topImages;
      this.haveTopImgs = true;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodParam(data.itemParams.info, data.itemParams.rule)
      if(data.rate.cRate !== 0){
        this.commentInfo = date.rate.list[0]
      }
    });
  },
  methods: {
    scrollRefresh(){
      this.$refs.scroll.refresh()
    }
  },
};
</script>

<style>
.container{
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>