<template>
   <div class="container">
     <Header></Header>
     <hr>
     <router-view></router-view>
   </div>  
</template>

<script>
import Header from "./components/Header"
export default {
  Header,
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
    .container{
      padding: 3% 15%;
      display: flex;
    }
</style>