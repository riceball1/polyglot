<template>
  <div>
      <TurkishLessonOne />
  </div>
</template>

<script>
import TurkishLessonOne from './TurkishLessonOne.vue';

export default {
  name: "TurkishView",
  props: {
      currentLanguage: {type: String},
  },
  components: {
      TurkishLessonOne,
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
