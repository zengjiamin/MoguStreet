import {request} from './request';

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommendList(){
  return request({
    url:'/recommend'
  })
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice //真实价格
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class GoodsRate{
  constructor(list){
    if(list){
      for(var i=0;i<=list.length;i++){
            return list[i]
            // console.log(n)
      }
    }
    
  }
}

export class RecommendList{
  constructor(list){
    for(var i=0;i<list.length;i++){
      // console.log(list.length)
     return list[i]
      // console.log(list)
    }
  }
 }

 
