<template>
  <div>
    <TabBar>
      <item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar//home.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </item>
      <item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/grid.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/grid_active.svg" alt="">
        <div slot="item-text">分类</div>
      </item>
      <item path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </item>
      <item path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/wode.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/wode_active.svg" alt="">
        <div slot="item-text">我的</div>
      </item>
    </TabBar>
  </div>
</template>

<script>
import TabBar from './TabBar'
import Item from './Item.vue'
export default {
  name:'Maintabbar',
  components:{
    TabBar,
    Item
  }
  
}
</script>

<style scoped>

</style>