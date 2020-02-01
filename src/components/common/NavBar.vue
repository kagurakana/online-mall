<template>
  <div class="nav-bar">
    <div class="left">
    <slot name="left"></slot>
    </div>
    <div class="mid">
    <slot name="mid"></slot>
    </div>
    <div class="right">
    <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"NavBar"
}
</script>

<style scoped>
.nav-bar{
  box-shadow: 0 1px 3px 3px rgba(122,122,122,0.25) ;
  display: flex;
  line-height: 44px;
  text-align: center;
}
.left, .right{
  width: 60px;
}
.mid{
  flex: 1;
}

</style>