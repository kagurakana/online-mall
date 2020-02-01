<template>
  <div>
    <Swiper>
      <template v-slot:swiperItem>
        <SwiperItem class="detail-swaper" v-for="(img, index) in imgs" :key="index">
          <img :src="img" alt="">
        </SwiperItem>
      </template>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper/index"


export default {
name:"DetailSwaper",
components:{
  Swiper,
  SwiperItem,
},
props:{
  imgs:{
    type:Array
  }
}
}
</script>

<style scoped>
.detail-swaper{
  width: 100%;
  height: 240px;
  overflow:hidden
}
.detail-swaper img{
  width: 100%;
  overflow: hidden;
}
</style>