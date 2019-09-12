<template>
  <v-app>
    <v-content>
      <NavBar></NavBar>
      <div class="mx-4">
      <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
