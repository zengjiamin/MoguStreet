<template>
  <div id="detail" v-cloak>
   <DetailNavBar @titleClick="titleClick"/>
    <scroll class="content" ref="scroll"
    :probeType="3" 
    @scroll="contentScroll">
      <!-- 属性：topImages 传入值：top-images -->
    <DetailSwiper :topImages="topImages" />
    <DetailBaseInfo :goods="goods" />
    <DetailShopInfo :shop="shop" />
    <DetailParamInfo :paramInfo="paramInfo" ref="param"/>
    <DetailGoodsInfo :detailInfo="detailInfo" 
    @imageLoad="imageLoad"/>
    <DetailCommentInfo :commentInfo="commentInfo" ref="comment"/>
    <DetailRecommendInfo :recommendList="recommendList" ref="recommend"/>
    </scroll>
    <back-top @click.native="backClick" v-show="thisShowBackTop"/>
    <DetailBottomBar @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
import DetailParamInfo from './childComponents/DetailParamInfo'

import DetailBottomBar from './childComponents/DetailBottomBar'
import DetailCommentInfo from './childComponents/DetailCommentInfo'
import DetailRecommendInfo from './childComponents/DetailRecommendInfo'

import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'

import {mapActions} from 'vuex'

import {getDetail,Shop,Goods,GoodsParam,GoodsRate,getRecommendList,RecommendList} from '@/network/detail.js'
export default {
  name:"Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar,
    DetailCommentInfo,
    DetailRecommendInfo,

    Scroll,
    BackTop
  },
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      tabOffsetTop:0,
      commentInfo:{},
      recommendList:[],

      themeTopYs:[],
      thisShowBackTop:false,
      saveY:0,
    }
  },
  created(){
    //保存传入的iid
    this.iid = this.$route.params.iid
    //根据iid请求详情数据
    getDetail(this.iid).then(res => {
      //获取顶部轮播图片数据
      const data = res.data.result
      const rate = data.rate
      this.topImages =data.itemInfo.topImages
      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
      //获取商品详情信息
      this.detailInfo = data.detailInfo
      //保存参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      // 保存评论信息
      this.commentInfo = new GoodsRate(rate.list)

      this.$nextTick(()=>{
      this.getOffsetTops()
    })

    })
      getRecommendList().then((res, error) => {
      if (error) return
      this.recommendList = res.data.data.list
      //console.log(this.recommendList)
    })

    
  },

  methods:{
    ...mapActions(['addCart']), //把vuex的actions的方法映射出来，方便调用
    imageLoad(){
      this.$refs.scroll.refresh()
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
    },
    getOffsetTops() {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          
      //console.log(this.themeTopYs[1])
    },
    contentScroll() {
      this.saveY = this.$refs.scroll.getScrollY()
      this.thisShowBackTop = (-this.saveY) >1000
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    addToCart(){
      //1.展示购物车信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      product.count = 0
      // //2.将商品添加进购物车
      //this.$store.dispatch('addCart',product)

      this.addCart(product).then(res =>{
        this.$toast.show(res,2000)
        console.log(res)
      })
    }
  },

  updated(){
    this.$nextTick(()=>{
    this.imageLoad()
    this.getOffsetTops()
    })
  }

}
</script>

<style scoped>
#detail{
 position: relative;
 z-index: 3;
  background-color: #fff;
  height: 100vh;
}


.content{
  height:calc(100% - 44px);
  overflow: hidden;
}

[v-cloak]{
  display: none;
}

</style>