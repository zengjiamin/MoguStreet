//封装首页里的请求
import {request} from './request';

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

// const totalNums = []
 
// const nums1 = [21,11,22]
// const nums2 = [111,22,333]

// totalNums.push(...nums1)