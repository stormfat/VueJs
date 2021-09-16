<template>
    <div class="tab-control">
        <div
            v-for="(item, index) in titles"
            class="tab-control-item"
            :class="{ active: index === currentIndex }"
            @click="itemClick(index)"
        >
            <span>{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabControl',
    data() {
        return { currentIndex: 0 };
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index;
            this.$emit('tabClick', index);
        }
    },
    props: {
        titles: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<style scoped>
.tab-control {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: var(--font-size);
    background-color: #fff;
    line-height: 44px;
    z-index: 9;
}

.tab-control-item {
    flex: 1;
}
.tab-control-item span {
    padding: 5px 0px 5px 0;
}
.active span {
    color: var(--color-high-text);
    border-bottom: 3px solid;
}
</style>
