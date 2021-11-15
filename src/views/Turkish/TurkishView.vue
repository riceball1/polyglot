<template>
  <div>
      <TurkishLessonOne v-if="lesson == 1" />
      <TurkishLessonTwo v-if="lesson == 2"/>
  </div>
</template>

<script>
import TurkishLessonOne from './TurkishLessonOne.vue';
import TurkishLessonTwo from './TurkishLessonTwo.vue';

export default {
  name: "TurkishView",
    props: {
    lesson: { type: Number },
  },
  components: {
      TurkishLessonOne,
      TurkishLessonTwo,
  },
  data() {
    return {
     
    };
  },
  methods: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
