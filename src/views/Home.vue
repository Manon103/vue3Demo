<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <h1 class="title">{{title}}</h1>
    
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Home',
  setup(){
    const title = ref('从现在进入Vue3.0的学习吧！');

    return {
      title
    }
  },
}
</script>

<style lang="scss" scoped>
  .home {
    .title {

    }
  }
</style>
