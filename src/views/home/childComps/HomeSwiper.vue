<template>
<swiper>
  <template v-slot:swiperItem>
  <swiper-item v-for="(item,index) in banners" :key="index">
    <a :href="item.link">
      <img :src="item.image" @load="imgLoad" alt="">
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
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isLoad:false
    }
  },
  methods: {
    imgLoad(){
      if (!this.isLoad) {
      this.isLoad = !this.isLoad
      this.$emit("homeSwaperImgLoad")
      }
    }
  },
};
</script>

<style>
</style>