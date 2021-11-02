<template>
  <div id="app">
    <Main msg="Welcome to Polyglot"/>
  </div>
</template>

<script>
import axios from 'axios';
import Main from './components/Main.vue'


export default {
  name: 'app',
  components: {
    Main
  },
  created(){
    // Fetch Data
    this.fetchData();
},
  data() {
    return {
      // eslint-disable-next-line 
      baseUrl: window.location.href,
    }
  },
  methods: {
  fetchData(){
     axios.get(this.baseUrl + 'test.json').then(response => {
       // eslint-disable-next-line 
        console.log(response);
     })
  }
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
