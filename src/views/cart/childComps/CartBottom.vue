<template>
  <div class="cart-bottom">
    <div class="check-content" @click="SelectAll">
      <checkButton class="check-button" :is-checked="isSelectAll" /> 
    </div>
    <span class="all">全选</span>
    <div class="total">
    <div class="total-price">合计:￥{{totalPrice}}</div>
    <div class="clac">&nbsp&nbsp结算({{checkLength}})&nbsp&nbsp</div>
    </div>
  </div>
</template>

<script>
import checkButton from '@/components/content/checkButton/checkButton'
import {mapGetters} from 'vuex'
export default {
  name:"CartBottom",
  components:{
    checkButton
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter(item =>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.cartList.filter(item=>item.checked).length
    },
    isSelectAll(){
      //判断有没有不选中，如果有不选中的长度为true,再取反为false，则不全中
      //return !(this.cartList.filter(item => !item.checked).length)
      if(this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
    }
  },
  methods:{
    SelectAll(){
      for (let item of this.cartList){
      //  if(item.checked==true){ item.checked=false}
        if(item.checked==false){ 
          item.checked=true
          }else{
            item.checked=false
          }
      }
    }
  }
}
</script>

<style scoped>
.cart-bottom{
  background-color:#fff;
  border-top: 1px solid #ccc;

}
.check-button{
  width: 20px;
  height: 20px;
  margin-right: 3px;
}
.check-content{
  display: flex;
  padding-left: 10px;
  line-height: 20px;
  width: 10%;
  padding-top: 8px;
}
.total{
  font-size: 15px;
  display: flex;
  flex: 1;
  display: block;
}
.total-price{
  float: left;
  padding-left:80px;
  padding-top: 8px;
  
}
.all{
  padding-top: 8px;
}
.clac{
  height: 40px;
  color: white;
  background-color:red;
  float: right;
  display: block;
  padding-top: 10px;
  border-left: 3px solid red;
}

</style>