<template>
    <div class="inner-home">
        <v-header></v-header>
        <router-view></router-view>
    </div>
</template>

<script>
import vHeader from '@/views/common/Header';
import { ref } from 'vue';
export default {
    setup(){

        return {

        }
    },
    components: {
        vHeader
    }
}
</script>

<style lang="scss" scoped>
    .inner-home {
        background: #f7f7f7;
    }
</style>


