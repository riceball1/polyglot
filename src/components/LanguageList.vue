<template>
  <div class="list">
    <div v-for="(language, index) in languages" :key="index">
      <button class="list-box" v-on:click="handleLanguageRoute(language)">{{ language.name }}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LanguageList",
  created() {
    this.fetchData();
  },
  data() {
    return {
      baseUrl: window.location.href,
      languages: [],
    };
  },
  methods: {
    fetchData() {
      axios.get(this.baseUrl + "data.json").then((response) => {
        this.languages = response.data["languages"];
      });
    },
    handleLanguageRoute: function (language) {
      if(!language.enable) {
        alert(`${language.name} is not yet enabled`)
      } else {
        window.location.href = `${this.baseUrl}${language.linkName}`
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  margin: 20px auto;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
}
.list-box {
  background-color: rgb(221, 55, 199);
  border: 2px solid #fff;
  padding: 20px;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin: 5px;
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-box:hover {
  border: 2px solid rgb(221, 55, 199);
  color: #fff;
}
</style>
