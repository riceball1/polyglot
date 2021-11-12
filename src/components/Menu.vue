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
    };
  },
  methods: {
    displayLanguageMenu: function (languageName) {
      // sets submenu for active language
      this.currentLanguageMenu = languageName;
      this.activeLanguage = languageName;
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
</style>
