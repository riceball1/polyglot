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
        <Menu
          @handleActiveLanguage="setActiveLanguage"
          @handleDisplayLesson="setDisplayLesson"
          v-bind:activeLanguage="activeLanguage"
        />
      </div>
      <div class="display">
        <div v-if="activeLanguage.length < 1">
          <h3>Welcome to the Polyglot Website!</h3>
          <p>
            This is a free website that shares lessons on a few languages of the
            world.
          </p>
          <p>
            This site is built using vue framework. This site combines my passion for language learning and web development.
          </p>

          <p>
            Hope everyone enjoy the contents of the this site. This is continuously a evolving project. Enjoy!!
          </p>
        </div>
        <LanguageViews
          v-else-if="activeLanguage.length > 1"
          v-bind:languageToShow="activeLanguage"
          v-bind:lessonToDisplay="lessonIndex"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import LanguageViews from "../views/LanguageViews.vue";

export default {
  name: "MainLayout",
  data() {
    return {
      menuEnabled: true,
      activeLanguage: "",
      lessonIndex: 1, // default to the first lesson
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
    setActiveLanguage: function (language) {
      if (!language) {
        // reset lessonIndex when no active language
        this.lessonIndex = 1;
        this.activeLanguage = "";
      } else {
        this.activeLanguage = language;
      }
    },
    setDisplayLesson: function (lessonIndex) {
      this.lessonIndex = lessonIndex;
    },
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
