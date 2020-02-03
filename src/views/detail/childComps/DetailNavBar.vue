<template>
  <NavBar class="detail-nav">
    <template v-slot:left>
      <div @click="backClick">
        <img class="back-img" src="~assets/img/common/back.svg" alt="">
      </div>
    </template>
     <template v-slot:mid>
      <div class="mid">
         <div class="title" 
       v-for="(title,index) in titles" :key="title"
       :class="{active:index === currentIndex}"
       @click="titleClick(index)"
       >{{title}}
       </div>
      </div>
     </template>
   </NavBar>
</template>

<script>
import NavBar from 'components/common/NavBar'
export default {
  name:"DetailNavBar",
  components:{
     NavBar
  },
  data() {
    return {
      titles:["商品","参数","评论","推荐"],
      currentIndex:0,
    }
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    },
  },

}
</script>

<style scoped>
.mid{
  display: flex
}
.title{
  flex:1;
  font-size: 15px;
}
.active{
  color: rgb(233, 78, 78);
  border-bottom: 3px solid rgb(233, 78, 78);
}
.back-img{
  width: 22px;
  vertical-align: middle;
}
.detail-nav{
  position: relative;
  z-index: 10;
  background-color: #fff;
}

</style>