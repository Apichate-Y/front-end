<template>
  <v-app>
    <v-content>
      <NavigationBar />
      <div class="mx-4">
      <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  name: "App",
  components: {
    NavigationBar
  },
  data: () => ({
    //
  })
};
</script>
