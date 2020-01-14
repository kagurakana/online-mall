<template>
  <div id="tab-bar-item" @click="tabBarItemClick">
    <slot v-if="!isActive" name="img"></slot>
    <slot v-else name="img_active"></slot>
    <div :style="textActiveColor">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
    };
  },

  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },

    textActiveColor(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },

  props:{
    path:String,
    activeColor:{
      type:String,
      default:"#8a8a8a"
    }
  },
  methods:{
    tabBarItemClick(){
      this.$route.path == this.path || this.$router.push(this.path)
    }
  }
};
</script>

<style>
#tab-bar-item {
  text-align: center;
  flex: 1;
  color: black
}
#tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
.active {
  color: #8a8a8a;
}
</style> 