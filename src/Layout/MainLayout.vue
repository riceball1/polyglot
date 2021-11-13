<template>
  <div class="wrapper">
    <nav>
      <div class="toggle" v-on:click="toggleMenu">
        <div class="nav-button"></div>
        <div class="nav-button"></div>
        <div class="nav-button"></div>
      </div>
      <h1>polyglot</h1>
    </nav>

    <div class="content">
      <div class="left" v-if="menuEnabled">
        <Menu @handleActiveLanguage="setActiveLanguage" />
      </div>
      <div class="display">
        <p v-if="!activeLanguage">Language lessons are coming!</p>
        <LanguageViews v-bind:languageToShow="activeLanguage" v-else-if="activeLanguage" />

        
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import LanguageViews from '../views/LanguageViews.vue';

export default {
  name: "MainLayout",
  data() {
    return {
      menuEnabled: true,
      activeLanguage: '',
    };
  },
  components: {
    Menu,
    LanguageViews,
  },
  methods: {
    toggleMenu: function () {
      this.menuEnabled = !this.menuEnabled;
    },
    setActiveLanguage: function(language) {
      this.activeLanguage = language;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 0.15fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "nav nav"
    "content content"
    "content content";
}
.left {
  grid-area: left;
  color: #42b983;
  background-color: #0c1013;
  border-right: 1px solid #42b983;
  display: flex;
  flex-direction: column;
  width: 25%;
}

.content {
  margin: 0;
  padding: 0;
  grid-area: content;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
}



.display {
  width: 100%;
  padding-top: 50px;
}

nav,
nav > h1 {
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 10px;
  background-color: #fff;
}
.toggle {
  background-color: #fff;
  cursor: pointer;
}
.nav-button {
  background-color: #42b983;
  width: 35px;
  height: 5px;
  margin: 6px 0;
}
</style>
