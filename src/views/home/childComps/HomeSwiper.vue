<template>
<swiper>
  <template v-slot:swiperItem>
  <swiper-item v-for="(item,index) in banners" :key="index">
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>
  </swiper-item>
  </template>
</swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default:[]
    }
  }
};
</script>

<style>
</style>