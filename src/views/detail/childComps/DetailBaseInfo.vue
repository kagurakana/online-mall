<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <div>
          <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object
    }
  }
};
</script>

<style scoped>
.info-title{
  margin: 8px;
  color: rgb(61, 61, 61);
  font-size: 1rem;
}
.info-price{
margin: 8px;
}
.new-price{
  color: rgb(233,78,78);
  font-size: 1.3rem;
}
.old-price{
  padding: 0 6px;
  text-decoration: rgba(50, 50, 50, 0.5) line-through;
}
.discount{
  background-color:rgb(233,78,78);
  color: #fff;
  font-size: 0.9rem;
  border-radius :10%;
  padding: 1.5px;
  text-align: center;
}
.info-other{
    border-bottom: rgb(235, 235, 235) solid 3.5px;
    padding:5px 0 10px 0;
    display: flex;
      justify-content: space-between;
}
.info-other span{
  padding:0 10px;
  font-size: 0.85rem;
  color: rgb(150, 150, 150)

}
.info-service{
  font-size: 0.8rem;
  padding:10px 5px 15px 5px;
  display: flex;
  justify-content: space-between;
 border-bottom: rgb(235, 235, 235) solid 8px;
}
.info-service img{
width:0.8rem;
}
</style>