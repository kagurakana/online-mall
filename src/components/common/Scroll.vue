<template>
  <div class="scroll-container" ref="container">
    <div>
      <slot name="scroll"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
name:"Scroll",
data() {
  return {
    scroll:null
  }
},
mounted() {
  this.scroll = new BScroll(this.$refs.container,{
    click:true,
    probeType:3,
    pullUpLoad:true,
  }) 
},
}
</script>

<style>

</style>