
<template>
  <div class="scroll-container" ref="container">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: 0,
    pullUpLoad: false
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.container, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    this.scroll.on("scroll", position => {
      this.$emit("scrollPosition", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullUpLoad");
      this.scroll.finishPullUp();
    });
  },
  methods: {

    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll.refresh();
    }
  }
};
</script>

<style>
</style>