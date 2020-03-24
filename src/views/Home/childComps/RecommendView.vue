<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" v-lazy="item.image">
        <div>{{item.title}}</div>
      </a>
</div>
    </div>
</template>

<script>
import HomeSwiper from './HomeSwiper.vue'
export default {
  name:"RecommedView",
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 8px solid #eee;
  background-color: #fff;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
img[lazy="loading"]{
  width: 65px;
  height: 65px;
}
</style>