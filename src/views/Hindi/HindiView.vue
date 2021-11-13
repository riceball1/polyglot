<template>

  <div>
    <HindiLessonOne v-if="lesson == 1" />
    <HindiLessonTwo v-if="lesson == 2" />
  </div>
</template>

<script>
import HindiLessonOne from "./HindiLessonOne.vue";
import HindiLessonTwo from "./HindiLessonTwo.vue";
export default {
  name: "HindiView",
  props: {
    lesson: { type: Number },
  },
  components: {
    HindiLessonOne,
    HindiLessonTwo,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
