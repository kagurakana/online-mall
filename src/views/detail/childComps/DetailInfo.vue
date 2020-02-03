<template>
  <div class="good-intrduce" v-if="Object.keys(detailInfo).length !== 0">
    <img
      v-for="(item, index) in detailInfo.detailImage[0].list"
      :key="index"
      :src="item"
      @load="detailImageLoad"
    />
  </div>
</template>

<script>
import { debounce } from "common/utils";
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      emit: debounce(() => {
        this.$emit("detailImageLoad");
      }, 50)
    };
  },
  mounted() {},
  methods: {
    detailImageLoad() {
      this.emit();
    },
  }
};
</script>

<style scoped>
.good-intrduce img {
  width: 100%;
}
</style>