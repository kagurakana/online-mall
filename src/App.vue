<template>
  <div id="app">
    <!-- 除了detail之外的keepalive -->
    <keep-alive>
    <router-view/>
    </keep-alive>
    
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

<style scoped>
@import "assets/css/base.css";
</style>