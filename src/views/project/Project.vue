<template>
  <div class="project">
        <div class="title">项目初始化</div>
        <div class="step">step1：安装vue-cli</div>
        <div class="code">
            npm install -g @vue/cli
        </div>
        <div class="step">step2：初始化vue项目</div>
        <div class="code">
            vue create vue3Study
        </div>
        <div class="step">step3：升级vue3项目</div>
        <div class="code">
            <p>cd vue-next-test</p>
            <p>vue add vue-next</p>
        </div>
        <p>执行上述指令后，会自动安装 vue-cli-plugin-vue-next 插件，该插件会完成以下操作：</p>
        <ul>
            <li v-for="item in operation" :key="item" class="oper-item">{{item}}</li>
        </ul>
        <p>完成上述操作后，项目正式升级到 Vue 3.0</p>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(){
        const operation = ref([
            'a) 安装 Vue 3.0 依赖', 
            'b) 更新 Vue 3.0 webpack loader 配置，使其能够支持 .vue 文件构建（这点非常重要）', 
            'c) 创建 Vue 3.0 的模板代码', 
            'd) 自动将代码中的 Vue Router 和 Vuex 升级到 4.0 版本，如果未安装则不会升级',
            'e) 自动生成 Vue Router 和 Vuex 模板代码'
        ]);

        return {
            operation
        }
    }   
}
</script>

<style lang="scss" scoped>
    .project {
        width: 100%;
        height: 100%;
        background: #fff;
        padding: 20px;
        line-height: 2em;
        .oper-item {
            text-indent: 2em;
            list-style: none;
        }
    }
</style>