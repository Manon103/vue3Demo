<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <h2>{{arr}}</h2>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(){
    const count = ref(1);
    const arr = ref([1,2,4]);
    return {
      count,
      arr
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
