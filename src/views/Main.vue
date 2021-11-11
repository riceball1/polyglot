<template>
  <div>
    <h1>Welcome to Polyglot</h1>
    <div class="subsection">
      <p>👋 Welcome to polyglot! A free site with a collection of languages learning material.</p>
      </div>
  <div>
    <LanguageList />
  </div>
  </div>
</template>

<script>
import LanguageList from '../components/LanguageList.vue';

export default {
  name: 'Main',
  components: {
    LanguageList
  },
  methods: {
    showLanguageContent(){
      return true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 3rem;
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
