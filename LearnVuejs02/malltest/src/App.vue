<template>
    <router-view v-slot="{ Component }">
        <keep-alive :include="includeList">
            <component :is="Component" />
        </keep-alive>
    </router-view>
    <main-tab-bar></main-tab-bar>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar';
export default {
    data() {
        return {
            includeList: []
        };
    },
    name: 'app',
    components: { MainTabBar },
    watch: {
        $route(to) {
            // 监听路由变化，把配置路由中keepAlive为true的name添加到include动态数组中
            // vue的export name和router name要一样keep-alive才能生效
            if (to.meta && to.meta.keepAlive && this.includeList.indexOf(to.name) === -1) {
                this.includeList.push(to.name);
                this.includeList = Object.assign([], this.includeList);
            }
        }
    }
};
</script>

<style>
@import 'assets/css/base.css';

#app {
    position: relative;
}
</style>
