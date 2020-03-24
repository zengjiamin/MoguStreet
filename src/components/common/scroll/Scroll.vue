<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:"Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad  //是否监听上拉
    })
    //2.监听滚动位置
    if(this.probeType ===2 || this.probeType ===3){
      this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
  }
   //3.监听scroll滚动到底部
    if(this.pullUpLoad){  //判断是否需要监听，为true时才继续下面的动作
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
  },
  methods:{
    scrollTo(x,y,time=300){
      //判断scroll是否为null，有值才能往下执行
       this.scroll && this.scroll.scrollTo(x,y,time) 
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>