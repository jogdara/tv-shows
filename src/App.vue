<template>
<div id="app">
    <v-app>
      <div id="nav">
        <app-header
          :showNavLink="showNavLink"
          :links="navLinkUrl"
          :defaultPageUrl="defaultPageUrl"
          :headerMainTitle="headerMainTitle"
        />
      </div>
      <router-view />
      <app-footer :footerDescription="footerDescription"></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppHeader from "./components/appHeader.vue";
import AppFooter from "./components/appFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      showNavLink: true,
      footerDescription: "TV Shows",
      headerMainTitle: "TV Shows",
      navLinkUrl: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "show-details",
          url: "/details"
        }
      ],
      defaultPageUrl: "/"
    };
  }
};
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  
</style>
