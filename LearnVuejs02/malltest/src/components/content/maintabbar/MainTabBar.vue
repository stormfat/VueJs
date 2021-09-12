<template>
    <TabBar>
        <tab-bar-item link="/home">
            <template v-slot:item-icon><img src="~assets/img/tabbar/home.svg"/></template>
            <template v-slot:item-icon-active><img src="~assets/img/tabbar/home_active.svg"/></template>
            <template v-slot:item-text> 首页</template>
        </tab-bar-item>
        <tab-bar-item link="/category">
            <template v-slot:item-icon> <img src="~assets/img/tabbar/category.svg"/></template>
            <template v-slot:item-icon-active><img src="~assets/img/tabbar/category_active.svg"/></template>
            <template v-slot:item-text> <div>分类</div></template>
        </tab-bar-item>

        <tab-bar-item link="/cart">
            <template v-slot:item-icon> <img src="~assets/img/tabbar/cart.svg"/></template>
            <template v-slot:item-icon-active><img src="~assets/img/tabbar/cart_active.svg"/></template>
            <template v-slot:item-text> <div>购物车</div></template>
        </tab-bar-item>
        <tab-bar-item link="/profile" activeColor="gray">
            <template v-slot:item-icon> <img src="~assets/img/tabbar/profile.svg"/></template>
            <template v-slot:item-icon-active><img src="~assets/img/tabbar/profile_active.svg"/></template>
            <template v-slot:item-text> <div>档案</div></template>
        </tab-bar-item>
    </TabBar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';
export default {
    name: 'MainTabBar',
    data() {
        return {};
    },
    methods: {},
    components: {
        TabBar,
        TabBarItem
    }
};
</script>

<style scoped>
img {
    width: 24px;
    height: 24px;
    margin-bottom: 1px;
    margin-top: 2px;
}
</style>
