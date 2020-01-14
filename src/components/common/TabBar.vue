<template>
  <div id="tab-bar">
    <!-- Home -->
    <tab-bar-item path='/home' activeColor="#8a8a8a">
      <template v-slot:img>
        <img src="~assets/img/tabbar/home.svg" alt />
      </template>
      <template v-slot:img_active>
       <img src="~assets/img/tabbar/home_active.svg" alt />
       </template>
      <template v-slot:text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <!-- Category -->
    <tab-bar-item path='/category'>
      <template v-slot:img>
        <img src="~assets/img/tabbar/category.svg" alt />
      </template>
      <template v-slot:img_active>
        <img src="~assets/img/tabbar/category_active.svg" alt />
      </template>
      <template v-slot:text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <!-- Cart -->
    <tab-bar-item path='/cart'>
      <template v-slot:img>
        <img src="~assets/img/tabbar/cart.svg" alt />
      </template>
      <template v-slot:img_active>
        <img src="~assets/img/tabbar/cart_active.svg" alt />
      </template>
      <template v-slot:text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <!-- Profile -->
    <tab-bar-item path='/profile'>
      <template v-slot:img>
        <img src="~assets/img/tabbar/profile.svg" alt />
      </template>
      <template v-slot:img_active>
        <img src="~assets/img/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "components/content/TabBarItem";
export default {
  name: "TabBar",
  components: {
    TabBarItem
  }
};
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  width: 100%;
  height: 49px;
  background-color: #f6f6f6;
  bottom: 0px;
  box-shadow: 0px -2px 3px rgba(100, 100, 100, 0.25);
}
</style>