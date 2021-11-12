<template>
  <div id="menu">
    <div v-for="language in languages" :key="language">
        <div class="menu-item">{{language}}</div>
    </div>

    
    
  </div>
</template>

<script>


export default {
  name: 'Menu',
  data() {
      return {
          languages: ['hindi', 'spanish','turkish']
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu {
    flex: 1 0 auto;
}
.menu-item {
    color: #42b983;
    font-size: 2rem;
    width: 100%;
    cursor: pointer;
    margin: 10px auto;
}
.menu-item:hover {
    background-color: #42b983;
    color: #0c1013;
}

</style>
