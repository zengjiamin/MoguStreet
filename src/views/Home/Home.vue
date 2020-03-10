<template>
  <div id="home">
    <div class="home_nav"><nav-bar class="center"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
      @tabClick="tabClick" 
      ref="tabControl1" v-show="isTabFixed"
      />
    </div>

    <scroll class="content" 
    ref="scroll" 
    :probeType="3" 
    @scroll="contentScroll"
    :pull-up-load="true"
    @pullingUp="loadMore"
    >
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" 
      @tabClick="tabClick" 
      ref="tabControl2"
      />
      <goods-list :goods="showGoods" class="good-list"/>
    <!-- <goods-list :goods="goods[currentType].list" /> -->
      
    </scroll>
  <back-top @click.native="backClick" v-show="thisShowBackTop"/>
  <!-- 组件不能监听点击，要监听组件要加上.native -->
  
    </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper.vue'
import FeatureView from './childComps/FeatureView.vue'
import RecommendView from './childComps/RecommendView.vue'

import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'

import {getHomeMultidata,getHomeGoods} from "@/network/home.js"
import {debounce} from 'common/utils.js'

export default {
  name:"home",
  components:{
    HomeSwiper,
    FeatureView,
    RecommendView,
    
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

    getHomeMultidata

  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      scroll:null,
      thisShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },

  destroyed(){

  },
   activated(){
     this.$refs.scroll.scrollTo(0,this.saveY,0)
     this.$refs.scroll.refresh()
  },
   deactivated(){

     this.saveY = this.$refs.scroll.getScrollY()
  },

  
  created(){
  //拿服务器的数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  
  mounted(){
    /*图片加载完成的事件监听 */
  const refresh = debounce(this.$refs.scroll.refresh,500)
    //监听被发射的事件-item中图片加载完成
    this.$bus.$on('itemImageLoad',()=>{
    //在created或者document里面很可能拿不到mounted的东西
    //所以在mounted里面监听

    // this.$refs.scroll.refresh()
    refresh()
  })
  },

  methods:{
    /*事件监听相关方法 */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },

    /*网络请求相关方法 */
    getHomeMultidata(){
      getHomeMultidata().then(res => {  //将代码包装到methods里
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
     })
    },
    contentScroll(position){
      //判断backtop是否显示
     this.thisShowBackTop = (-position.y) > 1000
     //决定tabControl是否吸顶(position:fixed)
     this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    
    /*加载更多的数据 */
    loadMore(){
      this.getHomeGoods(this.currentType) //调用这个方法，页码+1
      this.$refs.scroll.scroll.refresh()  
      //调用refresh，重新计算可滚动区域
      //拯救scroll上拉加载后，刷新又拉不下去的bug
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /*加载商品数据 */
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        // res => pop前30页
        //将数组解析出来的元素一个个push进数组里的list
        this.goods[type].list.push(...res.data.data.list) 
        this.goods[type].page += 1

        //完成上拉加载更多
         this.$refs.scroll.finishPullUp()
  })
    }
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home_nav{
  background-color:var(--color-tint);

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index:5;
}

.center{
  color: #fff;
}

/* .content{
  height:calc(100% - 93px);
  overflow: hidden;
} */
.content{
  position:absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}


</style>