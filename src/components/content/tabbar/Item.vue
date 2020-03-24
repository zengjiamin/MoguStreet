<template>
<div class="item" @click="itemClick">
  <div v-if="!isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
  <div :style="activeStyle"><slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
  name:"Item",
  data(){
    return{
      
    }
  },
  methods:{
    itemClick(){
      if(this.$router.history.current.path !== this.path)
      {
        this.$router.replace(this.path)
      }else{
      // this.$router.go(0)
        
      }
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      //判断当前活跃path
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
      //判断是否处于活跃状态 如果是 {给他活跃颜色} 如果不是 就空着
    }
  }
}
</script>

<style scoped>
.item {
  flex:1;
  text-align: center;
    /* 一般开发的数值就是49 */
  height: 49px; 
  font-size: 14px;
}
.item img{
  width: 24px;
  height: 24px;
  /* 去掉图片下面的3px */
  vertical-align: middle;
  margin-bottom: 2px;
}
.active{
  color: red
}
</style>