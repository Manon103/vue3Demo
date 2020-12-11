<template>
    <div class="inner-home">
        <v-header></v-header>
        <div class="content">
            <div class="mini-content">
                <router-view></router-view>
            </div>
        </div>
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
        .content {
            @include margin-auto;
            min-height: calc(100% - 60px);
            padding: 30px 0;
            box-sizing: border-box;
            .mini-content {
                width: 100%;
                height: 100%;
                background: #fff;
            }
        }
    }
</style>


