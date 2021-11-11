<template>
  <div>
    <h1>Hindi</h1>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Hindi',
  created(){
    // Fetch Data
    this.fetchData();
},
  data() {
    return {
      // eslint-disable-next-line 
      baseUrl: window.location.href,
    }
  },
  methods: {
    fetchData(){
     axios.get(this.baseUrl + 'data.json').then(response => {
       // eslint-disable-next-line 
        console.log(response);
     })
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
