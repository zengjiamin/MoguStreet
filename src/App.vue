<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view />
    </keep-alive>
    <Maintabbar />
  </div>
</template>

<script>
import Maintabbar from './components/content/tabbar/Maintabbar.vue'
export default {
  name: 'App',
  components:{
    Maintabbar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
