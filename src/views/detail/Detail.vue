<template>
  <div class="detail">
    <DetailNavBar />
    <DetailSwaper v-if="haveTopImgs" :imgs="topImgs" />
    <DetailBaseInfo :goods="goods" />
  </div>
</template>

<script>
import { getDetail, Goods } from "network/detail";
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwaper from "./childComps/DetailSwaper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwaper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImgs: [],
      haveTopImgs: false,
      goods: {}
    };
  },
  activated() {
    this.haveTopImgs = false;
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      this.topImgs = res.result.itemInfo.topImages;
      this.haveTopImgs = true;
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
    });
  }
};
</script>

<style>
</style>