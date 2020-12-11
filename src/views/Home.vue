<template>
  <div class="home">
    <img src="@/assets/img/back.jpg" alt="">
    <div class="title">学习路线</div>
    <div class="steps">
      <ul class="step">
        <li v-for="(item, i) in studyStep" :key="item">
          <span class="item">
            <i class="fa" :class="item.icon" aria-hidden="true"></i>
            <span>{{item.prop}}</span>
          </span>
          <div class="border" v-if="i!==studyStep.length-1"></div>
        </li>
      </ul>
    </div>
    <div class="title">目录</div>
    <div class="category">
      <div class="cate-item" v-for="item in category" :key="item" @click="enter(item.url)">{{item.label}}</div>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue';
export default {
  name: 'Home',
  setup(){
    const { ctx } = getCurrentInstance();
    const title = ref('从现在进入Vue3.0的学习吧！');
    const studyStep = ref([
      {
        icon: 'fa-hourglass-start',
        prop: 'vue2.0'
      },
      {
        icon: 'fa-folder-open-o',
        prop: '项目构建'
      },
      {
        icon: 'fa-cubes',
        prop: '技术变更'
      },
      {
        icon: 'fa-check-square',
        prop: '实战'
      },
    ]);
    const category = [
      {
        label: '项目搭建',
        url: '/project'
      }, 
      {
        label: '技术变动',
        url: '/data'
      }, 
      {
        label: '语法变化',
        url: '/setUp'
      }, 
      {
        label: '总结',
        url: '/conclusion'
      }, 
    ];

    const enter = (url) => {
      ctx.$router.push({path: url});
    }

    return {
      title,
      studyStep,
      category,
      enter
    }
  },
}
</script>


<style lang="scss" scoped>
  .home {
    padding: 20px;
    box-sizing: border-box;
    img {
      width: 100%;
    }
    .title {
      font-size: 28px;
      font-weight: 500;
      text-align: center;
      margin: 40px 0;
    }
    .steps {
      width: 100%;
      padding: 20px 60px;
      box-sizing: border-box;
      .step {
        display: flex;
        li {
          display: flex;
          align-items: center;
          &:not(:last-child){
            width: 32%;
          }
          i {
            color: #12bf92;
          }
          .border {
            width: calc(100% - 80px);
            height: 2px;
            background: #12bf92;
          }
          .item {
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 80px;
            line-height: 32px;
          }
        }
      }
    }
    .category {
      padding: 20px 60px;
      display: flex;
      justify-content: space-between;
      font-weight: 400;
      color: #6d7c8b;
      font-size: 12px;
      .cate-item {
        width: 20%;
        background: #f2fcfa;
        height: 36px;
        line-height: 36px;
        padding-left: 15px;
        cursor: pointer;
      }
    }
  }
</style>
