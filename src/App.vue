<template>
  <div id="app">
    <router-view />
    <TabBar />
  </div>
</template>

<script>
import TabBar from "components/common/TabBar";
export default {
  name: "App",
  components: {
    TabBar,

  }
};
</script>

<style>
@import "assets/css/base.css";
</style>