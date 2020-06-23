<template>
    <div class="main-container">
       <header>
          <app-header></app-header>
       </header>
       <div class="status">
          More info
       </div>
       <div class="content">
          <router-view></router-view>
       </div>
       <footer>2020 - Footer</footer>
    </div>
</template>

<script>
import Header from "./components/Header"
export default {
  components: {
      appHeader: Header
  },
  data(){
    return{
      
    }
  }
}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body{
    
  }
  .main-container{
    padding: 3% 7%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  /* background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8),  rgba($color-primary-dark, 0.8)) ,url("../img/hero.jpg"); */
    gap: .3rem;
  }

  header{
    grid-column: 1/-1;
    grid-row: 1/2;
    background-color: black;
    padding: .8rem .2rem;
  }

  .status{
    grid-column: 1/4;
    grid-row: 2/3;
    background-color: rgb(236, 126, 126);
    width: 40vh;

  }

  .content{
    grid-column: 4/-1;
    grid-row: 2/3;
    padding: 2% 5%;
  }

  footer{
    grid-column: 1/-1;
    grid-row: 3/4;
    padding: 1.5rem;
    background-color: rgb(236, 126, 126);
  }

</style>