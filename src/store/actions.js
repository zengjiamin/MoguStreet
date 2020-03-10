import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default{
  //如果做了什么操作，想让外界知道的话，就要用到Promise把数据传出去
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
    //查找之前数组有木有这个商品
     let oldProduct = context.state.cartList.find(item=>item.iid ===payload.iid)
    //2.判断oldProduct
    if(oldProduct){
      // oldProduct.count +=1
      context.commit(ADD_COUNTER,oldProduct)
      resolve('添加了新的商品在购物车等亲~')
    }else{
      payload.count =1
      // context.cartList.push(payload)
      context.commit(ADD_TO_CART,payload)
      resolve('添加了新的商品在购物车等亲~')
    }
    })

  }
}