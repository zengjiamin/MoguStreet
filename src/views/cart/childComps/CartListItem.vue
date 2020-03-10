<template>
  <div id="shop-item">
    <div class="item-selector">
      <checkButton :is-checked="product.checked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>

    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-title right">x{{product.count}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import checkButton from '@/components/content/checkButton/checkButton'
import {mapGetters} from 'vuex'
export default {
  name:"CartListItem",
  components:{
    checkButton
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  methods: {
    checkClick(){
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
  width:20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-title,.item-desc{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.item-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.item-bottom .item-price {
  color: orangered;
}
</style>