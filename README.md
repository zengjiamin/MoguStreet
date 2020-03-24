# MoguStreet
a vuejs MoguStreet

运行查看npm run dev


|--src
   
|--assets  存放公用css，img
   
|--common  存放公用变量，方法
  
 |--components 存放公用组件
  
 |--network 存放关于网络请求的文件
  
 |--router  路由
   
|--store
   
|--views   存放页面
      
|--cart 购物车
        
  |--childComps
        
    |--CartBottom.vue 购物车底部组件
        
    |--CartList.vue   购物车列表
         
    |--CarListItem.vue 构成购物车列表的一个个商品
         
    |--CheckButton.vue 点击选择的按钮组件
      
|--category 分类
        
  |--childComps
         
      |--TabContent.vue 传送数据
          
      |--TabContentCategory.vue 列表详情
          
      |--TabContentDetail.vue 列表详情
          
      |--TabMenu.vue  列表目录
     
|--Detail  详情页
      
|--Home 主页
         
  |--childComps
         
     |--HomeSwiper.vue 轮播
          
     |--FeatureView.vue 存放Banner
         
     |--RecommendView.vue 分类详情
     
|--profile 个人中心