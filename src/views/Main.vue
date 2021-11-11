<template>
  <div>
    <div v-if="!activeLanguage">
      <h1>Welcome to Polyglot</h1>
      <div class="subsection">
        <p>
          👋 Welcome to polyglot! A free site with a collection of languages
          learning material.
        </p>
      </div>
    </div>
    <div>
      <LanguageList
        @handleLanguageRoute="handleLanguageRoute"
        activeLanguage="activeLanguage"
      />
      <div v-if="activeLanguage" class="language-display">
        <h2>{{ activeLanguage }}</h2>
        <p>Language Lessons Coming Soon!</p>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageList from "../components/LanguageList.vue";

export default {
  name: "Main",
  data() {
    return {
      activeLanguage: "",
    };
  },
  components: {
    LanguageList,
  },
  methods: {
    showLanguageContent() {
      return true;
    },
    handleLanguageRoute(language) {
      if (!language.enable) {
        this.activeLanguage = "";
        alert(`${language.name} is not yet enabled`);
      } else {
        this.activeLanguage = language.name;
      }
    },
  },
};
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
.language-display {
  padding: 10px;
  margin: 10px;
  color: #fff;
  border: 3px solid #fff;
  height: 300px;
}
.language-display h2 {
  color: #42b983;
}
</style>
