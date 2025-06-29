<template>
  <Home />
  <Myfile />
  <Users />
  <Ais />
  <Mycomputed />

  <div id="app">
    <!-- <router-link to="/">Home</router-link> ||
    <router-link to="/myfile">Login</router-link> ||
    <router-link to="/users">Register</router-link> ||
    <router-link to="/Ais">APIS</router-link> -->
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Ais from "./pages/Ais.vue";
import Users from "./pages/Users.vue";
import Myfile from "./pages/myfile.vue";
import Mycomputed from "./Mycomputed.vue";

export default {
  components: {
    //Home,
    Myfile,
    Users,
    //Ais,
    //Mycomputed,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
</style>
