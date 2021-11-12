<template>
  <div id="menu">
    <div v-for="language in languages" :key="language">
      <div
        class="menu-item"
        v-bind:class="{ active: activeLanguage == language }"
        v-on:click="displayLanguageMenu(language)"
      >
        {{ language }}

        <ul class="sublangauge-menu" v-if="activeLanguage == language">
          <li>{{ language }} lesson</li>
          <li>{{ language }} lesson</li>
          <li>{{ language }} lesson</li>
        </ul>
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
      languages: ["hindi", "spanish", "turkish"],
      currentLanguageMenu: "",
      activeLanguage: "",
      handleActiveLanguage: { type: Function },
    };
  },
  methods: {
    displayLanguageMenu: function (languageName) {
      if (this.activeLanguage === languageName) {
        this.activeLanguage = "";
      } else {
        // sets submenu for active language
        this.currentLanguageMenu = languageName;
        this.activeLanguage = languageName;
      }
      this.$emit("handleActiveLanguage", this.activeLanguage);
    },
  },
};
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
  font-weight: 600;
}

.active {
  background-color: #42b983;
  color: #0c1013;
}

.menu-item:hover {
  color: #fff;
}
.sublangauge-menu {
  font-size: 1rem;
  background-color: rgb(66, 63, 63);
  color: #0c1013;
  font-weight: 300;
}
.footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  margin: 10px auto;
  width: 20%;
  background-color: transparent;
}
</style>
