<template>
  <div class="cart-list">
    
    <scroll class="content" ref="scroll">
    <CartListItem v-for="(item,index) in cartList" 
    :product="item"
    :key="index"/>

     </scroll>
  </div>
</template>

<script>

import CartListItem from './CartListItem'
import Scroll from '@/components/common/scroll/Scroll'
import {mapGetters} from 'vuex'
export default {
  name:"CartList",
  components:{
    CartListItem,
    Scroll
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.content{
  height:calc(100% - 50px);
  overflow: hidden;
}
.cart-list{
  height: 100vh;
}
</style>