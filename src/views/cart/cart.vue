<template>
    <div id="cart">
      <NavBar class="nav_bar"><div slot="center">购物车({{cartLength}})</div></NavBar>
     
     <!-- 商品列表 -->

      <CartList />
     
     <!-- 底部汇总 -->
     <cart-bottom class="bottom"/>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottom from './childComps/CartBottom'


import {mapGetters} from 'vuex'
export default {
  name:"cart",
  components:{
    NavBar,
    CartList,
    CartBottom
  },
  computed:{
    // cartLength(){
    //   return this.$store.getters.cartLength
    // }
    ...mapGetters([
      'cartLength'
      
    ])
  }
}
</script>

<style scoped>
#cart{
  
}
.nav_bar{
  background-color:var(--color-tint);;
  color:white;
  font-weight: 500;
}
.bottom{
  height: 85px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  text-align: center;
}
</style>