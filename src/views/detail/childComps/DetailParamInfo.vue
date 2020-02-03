<template>
  <div class="detailParamsInfo" v-if="Object.keys(this.paramInfo).length !== 0">
    <table class="table-size">
      <tr v-for="(size, index) in paramInfo.sizes[0]" :key="index">
        <td v-for="(item, index) in size" :key="index">{{item}}</td>
      </tr>
    </table>
    <ul class="ul-info">
      <li class="li-info" v-for="(item, index) in paramInfo.infos" :key="index">
        <div class="div-key">{{item.key}}</div>
        <div class="div-value">{{item.value}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object
    }
  }
};
</script>

<style scoped>
.detailParamsInfo {
  border-top: 4px solid rgb(235, 235, 235);
}
.table-size {
  border-collapse: collapse;
  margin: 5px auto;
  font-size: 1rem;
  width: 95%;
}
.table-size tr td {
  border-bottom: 2px solid rgb(235, 235, 235);;
  padding: 5px 0;
  text-align: center;
}
.ul-info{
  width: 95%;
  line-height: 1.15rem;
  margin: 0 auto;
}
.li-info{
  display: flex;
  align-items:center;
  min-height: 40px;
  padding: 5px 0;
  border-bottom: 1px solid rgb(235, 235, 235)

}
.li-info .div-key{
  width: 25%; 
  margin-left:10px ;

}
.li-info .div-value{
  width: 65%
}

</style>