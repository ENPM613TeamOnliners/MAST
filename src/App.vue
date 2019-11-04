<template>
<<<<<<< HEAD
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Modern Academic Security Training (MAST)</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn>
         <router-link to="/logout" exact>Logout</router-link>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
=======
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="contents">
      <router-view/>
    </div>
  </div>
>>>>>>> dee4a56f5b66fd6d0427c45e3b7e497d5f73ec0c
</template>

<script>
export default {
<<<<<<< HEAD
  name: "App",

  data: () => ({
    //
  })
};
</script>
=======
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
>>>>>>> dee4a56f5b66fd6d0427c45e3b7e497d5f73ec0c
