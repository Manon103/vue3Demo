<template>
    <div class="header">
        <div class="content">
            <div class="left">
                <img src="@/assets/img/logo.png" alt="" class="mr-10">
                <div>Vue 3.0学习笔记</div>
            </div>
            <div class="right">
                <ul class="nav" ref="nav" v-clickoutside="handleClose">
                    <li class="menu" v-for="(item, i) in menuList" :key="item.url" @click="closeOther(i)" :class="item.active?'active':''">
                        {{item.name}}
                        <i class="fa fa-angle-down" aria-hidden="true" v-if="item.children"></i>
                        <ul class="nav-item" v-if="item.show">
                            <li class="menu-item" v-for="menu in item.children" :key="menu.url" @click="changeUrl(menu.url, i)">{{menu.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
/***
 * 发现一个问题：
 * 通过实例拿到当前的路由在路由切换时path值并没有改变，应该是需要对路由进行监听，动态赋予值
 * 导致导航栏的active样式不能通过路由来判断激活，后续再完善
 */


import { ref, getCurrentInstance } from 'vue';
export default {
    setup(){
        const { ctx } = getCurrentInstance();   // 当前实例
        const nav = ref(null);      // $ref改变
        const path = ref(ctx.$router.currentRoute.value.path);  // 路由
        const menuList = ref([
            {
                name: '项目搭建',
                url: '/project',
                active: false
            },
            {
                name: '技术变动',
                show: false,
                active: false,
                children: [
                    {
                        name: '数据劫持',
                        url: '/data'
                    },
                    {
                        name: '虚拟DOM',
                        url: '/dom'
                    }
                ]
            },
            {
                name: '语法变化',
                show: false,
                active: false,
                children: [
                    {
                        name: 'setUp',
                        url: '/setUp'
                    },
                    {
                        name: 'computed',
                        url: '/computed'
                    },
                    {
                        name: 'watch',
                        url: '/watch'
                    },
                    {
                        name: '生命周期',
                        url: '/lifeCycle'
                    },
                    {
                        name: 'Vuex',
                        url: '/vuex'
                    }
                ]
            },
            {
                name: '总结',
                url: '/conclusion',
                active: false
            }
        ]);
        const handleClose = () => {
            menuList.value.forEach(item => {
                item.show = false
            })
        }
        // 点击导航关闭其他展开的菜单
        const closeOther = (index) => {
            menuList.value.forEach((item, i) => {
                if(index === i){
                    menuList.value[i].show = !menuList.value[i].show;
                    menuList.value[i].active = true;
                }else{
                    menuList.value[i].show = false;
                    menuList.value[i].active = false;
                }
            })
            if(menuList.value[index].url){
                ctx.$router.push({path: menuList.value[index].url})
            }
        }
        const changeUrl = (url, i) => {
            menuList.value[i].show = false;
            ctx.$router.push({path: url})
        }

        return {
            menuList,
            nav,
            handleClose,
            closeOther,
            changeUrl,
            path
        }
    },
    directives: {
        clickoutside: {
            mounted(el, binding, vnode) {
                function documentHandler(e) {
                    if (el.contains(e.target)) {
                        return false;
                    }else{
                        binding.value();
                    }
                }
                el._vueClickOutside_ = documentHandler;
                document.addEventListener("click", documentHandler);
            },
        },
    },
}
</script>

<style lang="scss" scoped>
    .header{
        height: 60px;
        width: 100%;
        background: #fff;
        color: $header-color;
        font-size: 14px;
        .active {
            color: #419EFF;
        }
        .content {
            @include margin-auto;
            box-sizing: border-box;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left {
                display: flex;
                align-items: center;
                font-size: 18px;
                font-weight: 600;
                img {
                    height: 36px;
                }
            }
            .right{
                .nav {
                    .menu {
                        display: inline-block;
                        list-style: none;
                        margin-right: 40px;
                        position: relative;
                        cursor: pointer;
                        &:hover {
                            color: #419EFF;
                        }
                        .nav-item {
                            position: absolute;
                            padding: 5px 0;
                            left: -15px;
                            top: 40px;
                            box-sizing: border-box;
                            background: #fff;
                            box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
                            .menu-item {
                                list-style: none;
                                width: 120px;
                                padding-left: 15px;
                                height: 36px;
                                line-height: 36px;
                                box-sizing: border-box;
                                text-align: left;
                                color: #6D7C8B;
                                &:hover {
                                    background: #E2F0FF;
                                    color: #419EFF;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>