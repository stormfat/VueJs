<template>
    <div class="recommend">
        <div v-for="item in recommends" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" />
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendView',
    data() {
        return {};
    },
    methods: {},
    props: {
        recommends: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<style scoped>
.recommend {
    display: flex; /*水平布局*/
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 15px;
    border-bottom: 8px solid #503241;
}

.recommend-item {
    flex: 1; /*元素均分 */
}

.recommend-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
}
</style>
