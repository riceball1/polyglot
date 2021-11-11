<template>
  <div id="app">
    <Main msg="Welcome to Polyglot"/>
  </div>
</template>

<script>
import Main from '../src/components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(221, 55, 199);
  margin: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.728);
  height: 100vh;
  box-shadow: rgb(241, 239, 239) 0px 5px 15px;
}
</style>
