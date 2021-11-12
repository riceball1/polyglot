<template>
  <div id="main">
    <div id="left">
      <Menu />
      <footer class="footer">copyright © 2021 <a href="https://github.com/riceball1/polyglot">riceball</a></footer>

    </div>
    <div id="content"><h1>{{ msg }}</h1></div>
    
  </div>
</template>

<script>
import Menu from './Menu.vue';


export default {
  name: 'MainLayout',
  props: {
    msg: String
  },
  components: {
    Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
#left {
  color: #42b983;
  background-color: #0c1013;
  border-right: 1px solid #42b983;
  display: flex;
  flex-direction: column;
}

#left, #content {
   height: 100vh;
   margin: 0;
   padding: 20px;
}

.footer {
    flex-shrink: 0;
    margin-bottom: 50px;
}

#content {
  display: flex;
  justify-content: center;
  align-content: center;
}

h3 {
  margin: 40px 0 0;
}

</style>
