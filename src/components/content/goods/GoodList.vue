<template>
  <div id="good-list">
      <GoodItem :item="good" v-for="(good,index) in goods" :key="index"/>
  </div>
</template>

<script>
import GoodItem from "components/content/goods/GoodItem"
export default {
  name:"GoodList",
  components:{
    GoodItem
  },
  props:{
    goods:{
      type:Array,
      default:[]
    }
  }

}
</script>

<style>
#good-list{
  display: flex;
flex-wrap: wrap;
 justify-content:space-evenly
}

</style>