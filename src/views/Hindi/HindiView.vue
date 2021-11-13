<template>
  <div>
    <HindiLessonOne v-if="currentLesson == 'hindi lesson 1'" />
  </div>
</template>

<script>
import HindiLessonOne from "./HindiLessonOne.vue";

export default {
  name: "HindiView",
  props: {
    currentLanguage: { type: String },
    currentLesson: { type: String },
  },
  components: {
    HindiLessonOne,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
