<template>
  <div id="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      @click="itemClick(index)"
      :class="{active:index==activeIndex}"
      class="tab-control-item"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.activeIndex = index;
      this.$emit("tabControlClick",index)
    }
  }
};
</script>

<style>
#tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  z-index: 9;
  /* background-color:lightgray; */
}
.tab-control-item span {
  padding: 5px;
}
.tab-control-item {
  flex: 1;
}
.active span {
  border-bottom: 2px solid rgb(190, 89, 89);
}
</style>