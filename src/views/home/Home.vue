<template>
  <div>
    <NavBar class="nav-bar">
      <template v-slot:mid>
        <div>购物街</div>
      </template>
    </NavBar>
    <Scroll class="home-scroll">
      <template v-slot:scroll>
        <HomeSwiper v-if="isHaveBannersData" :banners="banners"></HomeSwiper>
        <HomeRecommend :recommends="recommends"></HomeRecommend>
        <HomeFeature />
        <TabControl
          class="tab-control"
          @tabControlClick="tabControlClick"
          :titles="['流行','新款','精选']"
        />
        <GoodList :goods="goods[currentGoodType].list" />
      </template>
    </Scroll>
  </div>
</template>

<script>
import { getHomeMutidata, getHomeGoods } from "network/home";

import Scroll from "components/common/Scroll";
import NavBar from "components/common/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
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
      currentGoodType: "pop"
    };
  },
  created() {
    getHomeMutidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.banners)
      //得到数据
      this.isHaveBannersData = true;
    });
    this.getHomeGoods("new");
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
  },
  methods: {
    //网络请求方法
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      //导入的method
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      });
    },

    // 事件监听方法
    tabControlClick(index) {
      console.log(index);
      switch (index) {
        case 0: {
          this.currentGoodType = "pop";
          break;
        }
        case 1: {
          this.currentGoodType = "new";
          break;
        }
        case 2: {
          this.currentGoodType = "sell";
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: rgb(190, 89, 89);
  color: aliceblue;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.home-scroll{
  height: 100vh;
  padding-top: 44px
}

</style>