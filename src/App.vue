<template>
    <v-app>
      <v-navigation-drawer app v-model="drawer" temporary>
        <v-row class="fill-height" no-gutters>
          
          <v-list class="grow">
            <v-list-item
              v-for="link in links"
              :key="link"
              link
            >
              <v-list-item-title v-text="link"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-row>
      </v-navigation-drawer>

      <v-app-bar app color="anchor">
        <v-app-bar-nav-icon @click="drawer = true"
        ></v-app-bar-nav-icon>
        <app-Header></app-Header>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-content>

        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer app>
        <!-- -->
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
      drawer: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
      links: ['Home', 'Contacts', 'Settings'],
      mini: true,
    }
  },
  created(){
    console.log(this.$vuetify.application.top)
  }
}
</script>

<style lang="scss">

</style>