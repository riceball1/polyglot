<template>
  <div>
    <h2>{{ languageToShow.toUpperCase() }}</h2>
    <HindiView v-if="languageToShow === 'hindi'" />
    <TurkishView v-if="languageToShow === 'turkish'" />
  </div>
</template>

<script>
import HindiView from "./Hindi/HindiView.vue";
import TurkishView from "./Turkish/TurkishView.vue";

export default {
  name: "LanguageViews",
  props: {
    languageToShow: { type: String },
  },
  components: {
    HindiView,
    TurkishView,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
