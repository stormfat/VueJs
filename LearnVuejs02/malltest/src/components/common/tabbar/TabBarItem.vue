<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon" />
        </div>
        <div v-else>
            <slot name="item-icon-active" />
        </div>
        <div :style="activeStyle">
            <slot name="item-text" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    data() {
        return {
            //isActive: true
        };
    },
    methods: {
        itemClick() {
            this.$router.push(this.link).catch(err => {
                err;
            });
        }
    },
    //从父组件中获取数据
    props: {
        //从父组件中获取传入的路由地址字符串
        link: String,
        //从父组件中获取要设置的激活文字的颜色
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    computed: {
        isActive() {
            //将slot中的每个link值和当前激活的路由作比较，如果为-1表示不匹配，返回false。
            return this.$route.path.indexOf(this.link) !== -1;
        },
        activeStyle() {
            return this.isActive ? { color: this.activeColor } : {};
        }
    }
};
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 12px;
}

/* .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-bottom: 1px;
    margin-top: 2px;
} */
</style>
