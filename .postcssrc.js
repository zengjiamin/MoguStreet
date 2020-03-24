// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px-to-viewport":{
      viewportWidth:375,  //视窗宽度，对应设计稿的宽度
      viewportHeight:667, //视窗高度，对应实际高的高度（可不配置）
      unitPrecision:5,  //指定'px'转换为视窗单位值的小数位(很多时候无法整除)
      viewportUnit:'vw',  //指定需要转换成的视窗单位，建议使用vw
      selectorBlackList:['ignore','tabbar','Item','nav-bar','Maintabbar'], //指定不需要转换的类
      minPixelValue:1,  //小于或等于1px不转换为视窗单位
      mediaQuery:false  //允许在媒体查询中转换px
    }
  }
}
