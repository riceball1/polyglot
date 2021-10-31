<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="subsection">
      <p>👋 Welcome to polyglot! A free site with a collection of languages learning material.</p>
      </div>
  <div>
    <LanguageList />
  </div>
  </div>
</template>

<script>
import LanguageList from './LanguageList.vue';


export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    LanguageList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.subsection {
  width: 50%;
  margin: 10px auto;
  background-color: #b7bdba;
  padding: 20px;
  border-radius: 3px;
  color: rgb(3, 0, 0);
}
</style>
