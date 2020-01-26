<template>
  <div id="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"HomeRecommend",
  data() {
    return {
      
    }
  },

  props:{
    recommends:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style scoped>
#recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 5px 0 8px;
  border-bottom: 8px solid #eeeeee
}
.recommend-item{
margin:5px;
}
img{
  margin-bottom: 5px;
   width: 100%;
}
.recommend-item,img{
  flex:1;

}

</style>