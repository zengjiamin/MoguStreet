//封装多个实例就写function
import axios from 'axios'

export function request(config){
    //创建实例
  const instance = axios.create({
  //baseURL:'http://123.207.32.32:8000',
  baseURL:'http://106.54.54.237:8000',
    timeout:30000
  })

  //axios拦截器（此处拦截实例）
  //请求拦截
  instance.interceptors.request.use(config => {
    console.log(config)
    return config  //拦截后一定要把数据返回去
  },err =>{
    console.log(err)
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    console.log(res)
    return res
  },err =>{
    console.log(err)
  })
  //本身返回的就是promise
  return instance(config)
}