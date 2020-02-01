<template>
  <div id="home">
    <NavBar class="nav-bar">
      <template v-slot:mid>
        <div>购物街</div>
      </template>
    </NavBar>
     <TabControl
          ref="fakeTabCtrl"
          class="tab-control"
          v-show="tabIsFixed"
          @tabControlClick="tabControlClick"
          :titles="['流行','新款','精选']"
        />
    <Scroll
      ref="scroll"
      class="home-scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scrollPosition="contentScrolled"
      @pullUpLoad="loadMore"
    >
      <template v-slot:scroll>
        <HomeSwiper 
        v-if="isHaveBannersData" 
        :banners="banners"
        @homeSwaperImgLoad="calcTabOffsetTop"
        />
        <HomeRecommend :recommends="recommends"/>
        <HomeFeature />
        <TabControl
          ref="tabCtrl"
          class="tab-control"
          @tabControlClick="tabControlClick"
          :titles="['流行','新款','精选']"
        />
        <GoodList :goods="goods[currentGoodType].list" />
      </template>
    </Scroll>
    <!-- 监听组件的事件需要native属性 -->
    <BackTop v-show="isShowBackTop" @click.native="backTop" class="back-top" />
  </div>
</template>

<script>
import { debounce } from "common/utils";

import { getHomeMutidata, getHomeGoods } from "network/home";

import Scroll from "components/common/Scroll";
import NavBar from "components/common/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/common/BackTop";
import HomeFeature from "views/home/childComps/HomeFeature";
import HomeRecommend from "views/home/childComps/HomeRecommend";
import HomeSwiper from "views/home/childComps/HomeSwiper";
export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    GoodList,
    BackTop,
    TabControl
  },

  data() {
    return {
      isHaveBannersData: false /* 同步flag 是否从服务器得到数据 */,
      banners: [],
      recommends: [],
      navBarStyle: {},
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentGoodType: "pop",
      isShowBackTop: false,
      TabCtrlOffsetTop:0,
      tabIsFixed:false,
      leftPosY:0
    };
  },
  created() {
    getHomeMutidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.banners)
      //得到数据(轮播图和推荐等)
      this.isHaveBannersData = true;
    });
    this.getHomeGoods("new");
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
  },
  mounted() {
    //对refresh的调用做防抖处理2
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    //监听事件总线中 goodItem组件传过来的方法
    this.$bus.$on("itemImgLoad", () => {
      // refresh();
      this.$refs.scroll && refresh();
    });
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.leftPosY,1)
  },
  deactivated() {
    this.leftPosY = this.$refs.scroll.scroll.y
    console.log(this.leftPosY);
    
  },
  methods: {
    //网络请求方法
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      //导入的method
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 事件监听方法
    tabControlClick(index) {
      console.log(index);
      switch (index) {
        case 0: 
          this.currentGoodType = "pop";
          break;
        case 1: 
          this.currentGoodType = "new";
          break;   
        case 2: 
          this.currentGoodType = "sell";
          break;
      }
        this.$refs.fakeTabCtrl.activeIndex = index
        this.$refs.tabCtrl.activeIndex = index 
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    loadMore() {
      // console.log("aaa");
      this.getHomeGoods(this.currentGoodType);
    },
    contentScrolled(position) {
      this.isShowBackTop = position.y < -1000 ? true : false;
      this.tabIsFixed = position.y < -this.TabCtrlOffsetTop?true:false
    },
    calcTabOffsetTop(){
      this.TabCtrlOffsetTop = this.$refs.tabCtrl.$el.offsetTop
      console.log(this.TabCtrlOffsetTop);
      
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: rgb(190, 89, 89);
  color: aliceblue;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.home-scroll {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  /* margin-top: 44px; */
  /* padding-top: 44px */
}

</style>