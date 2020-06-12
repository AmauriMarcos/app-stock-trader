<template>
    <v-app>
      <v-navigation-drawer app>
       
      </v-navigation-drawer>

      <v-app-bar app class="bar" >
        <app-Header></app-Header>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-content class='content'> 
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer app color="#ff2e63">
         <div class="footer">
            <p>Stock trader 2020 - Vue Course</p>
         </div>
      </v-footer>
    </v-app> 
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
  .content{
    background-image:linear-gradient(to right bottom, rgba(0,0,0,.6), rgba(0,0,0,.5)), url('https://image.freepik.com/fotos-gratis/mercado-de-acoes-ou-forex-trading-grafico-no-conceito-grafico_73426-180.jpg');

     /* background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8),  rgba($color-primary-dark, 0.8)) ,url("../img/hero.jpg"); */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  footer{
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 15;
    padding: 1.3rem !important;
  }

  footer p{
    font-size: 1rem;
    color: #000;
    margin: 0 !important;

  }

  .bar{
    display: flex !important;
    justify-content: space-between;
  }
</style>