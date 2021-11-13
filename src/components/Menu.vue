<template>
  <div id="menu">
    <div v-for="language in languages" :key="language">
      <div
        class="menu-item"
        v-bind:class="{ active: activeLanguage == language.name }"
      >
        <h3 v-on:click="displayLanguageMenu(language.name)">
          {{ language.name }}
        </h3>
        <div v-if="selectedLanguage == language.name">
          <ul
            class="sublangauge-menu"
            v-for="lesson in language.lessons"
            :key="lesson"
          >
            <li v-on:click="displayLesson(lesson.lessonIndex)" v-bind:class="{ activeLesson: currentLessonIndex == lesson.lessonIndex }">
              {{ lesson.lessonName }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="footer">
      copyright © 2021
      <a href="https://github.com/riceball1/polyglot">riceball</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      languages: [
        {
          name: "hindi",
          lessons: [
            { lessonIndex: 1, lessonName: "Intro" },
            { lessonIndex: 2, lessonName: "Alphabet" },
          ],
        },
      ],
      currentLessonIndex: 1,
      selectedLanguage: "",
      handleActiveLanguage: { type: Function },
      handleDisplayLesson: { type: Function },
    };
  },
  props: {
    activeLanguage: { type: String },
  },
  methods: {
    displayLanguageMenu: function (languageName) {
      if(languageName === this.selectedLanguage) {
          this.selectedLanguage = ""
          this.currentLessonIndex = 1;
      } else {
          this.selectedLanguage = languageName;
      }

      this.$emit("handleActiveLanguage", this.selectedLanguage);
    },
    displayLesson: function (lessonIndex) {
        this.currentLessonIndex = lessonIndex;
      this.$emit("handleDisplayLesson", lessonIndex);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu {
  flex: 1 0 auto;
  text-align: center;
  margin: 0;
}
.menu-item h3 {
  color: #42b983;
  font-size: 2rem;
  width: 100%;
  cursor: pointer;
  margin: 10px auto;
  font-weight: 600;
  margin-bottom: 0;
}

.active h3 {
  background-color: #42b983;
  color: #0c1013;
}

.activeLesson {
    background-color: #fff;
}

.menu-item h3:hover {
  color: #fff;
}
.sublangauge-menu, li {
  font-size: 1.5rem;
  color: #42b983;
  font-weight: 400;
  margin: 0;
  cursor: pointer;
}

.sublangauge-menu li:hover{
    background-color: #42b983;
    color: #fff;
}
.footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  margin: 10px auto;
  width: 20%;
  background-color: transparent;
}

@media only screen and (max-width: 600px) {
  .menu-item h3 {
    font-size: 1rem;
  }

  .footer {
    width: 100%;
    font-size: 0.8rem;
  }

  .sublangauge-menu > li {
    font-size: 0.8rem;
  }
}
</style>
