<template>
  <div class="list">
    <div v-for="(language, index) in languages" :key="index">
      <div class="list-box">{{ language }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageList",
  data() {
    return {
      languages: ["हिंदी", "Türkçe", "Español", "Português"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.list-box {
  border: 2px solid rgb(221, 55, 199);
  padding: 20px;
  font-size: 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin: 5px;
}
.list-box:hover {
  background-color: rgb(221, 55, 199);
  border: 2px solid #fff;
  color: #fff;
}
</style>
