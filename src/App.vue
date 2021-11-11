<template>
  <div id="app">
    <router-view>
    <router-link to="/hindi">Hindi</router-link>
    </router-view>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
