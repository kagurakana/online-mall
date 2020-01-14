<template>
<div>
   <NavBar class="nav-bar">
      <template v-slot:mid>
        <div>购物街</div>
      </template>
    </NavBar>
</div>
</template>

<script>
import {getHomeMutidata} from "network/home"
import NavBar from "components/common/NavBar";
export default {
  name:"Home",
  components:{
        NavBar
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMutidata()
    .then(res=>{
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.nav-bar{
   background-color: rgb(190, 89, 89);
   color:aliceblue;
}
</style>