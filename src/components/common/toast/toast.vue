<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:"Toast",
  data(){
    return{
      message:'',
      isShow:false
    }
  },
  // props:{
  //   message:{
  //     type:String,
  //     default:''
  //   },
  //   show:{
  //     type:Boolean,
  //     default:false
  //   }
  // },
  methods:{
    show(message,duration){
      this.isShow = true;
      this.message = message
      setTimeout(()=>{
        this.isShow = false;
        this.message = ''
      },duration)
    }
  }

}
</script>

<style scoped>
.toast{
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
  background-color:rgba(0, 0, 0, .8);

  z-index:999;

  display: block;
  width: 120px;
  height: 60px;
  line-height: 30px;
  text-align: center;
  border-radius:10px;

}
</style>