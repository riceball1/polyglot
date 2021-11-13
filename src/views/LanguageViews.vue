<template>
  <div class="language-view">
    <h2 class="language-title">{{ languageToShow.toUpperCase() }}</h2>
    <HindiView v-if="languageToShow === 'hindi'" v-bind:lesson="lessonToDisplay" />
    <TurkishView v-if="languageToShow === 'turkish'" v-bind:lesson="lessonToDisplay"/>
  </div>
</template>

<script>
import HindiView from "./Hindi/HindiView.vue";
import TurkishView from "./Turkish/TurkishView.vue";

export default {
  name: "LanguageViews",
  props: {
    languageToShow: { type: String },
    lessonToDisplay: {type: Number},
  },
  components: {
    HindiView,
    TurkishView,
  },
};
</script>

<style>
.language-title {
    color: #42b983;
}

</style>
