<template>
  <MainLayout msg="Welcome to Polyglot" />
</template>

<script>
import MainLayout from "./components/MainLayout.vue";

export default {
  name: "App",
  components: {
    MainLayout,
  },
};
</script>

<style>
body,
* {
  background-color: #0c1013;
  color: #42b983;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
