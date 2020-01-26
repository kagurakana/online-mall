<template>
<div class="good-item">
    <img :src=item.show.img alt="">
    <div class="good-info">
    <p class="title">{{item.title}}</p>
    <span class="price">{{item.price}}</span>
    <span class="collect" >{{item.cfav}}</span>
  </div>
 </div>
</template>

<script>
export default {
  name:"GoodItem",
  props:{
    item:{
      type:Object,
      default:{}
    }
  }
}
</script>

<style>
.good-item img{
  width:100%;
  border-radius: 5px;
}

.good-item{
  width: 47%;
 
}

.good-info{
  overflow: hidden;
  text-align:center;
  font-size: 1rem;
  margin-bottom: 5px;
}

.good-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.price{
  margin-right: 20px;
}
.price::before{
content: "￥"
}
.collect{
  position: relative;
 /* z-index: -1; */
}
.collect::before{
  content:'';
  position: absolute;
  left: -14px;
  top:2px;
  width: 14px;
  height: 14px;
 
  background:url("~assets/img/common/collect.svg") 0 0/14px 14px/*bg-position(x,y)/bg-size(x y) */ no-repeat
}

</style>