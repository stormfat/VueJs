<template>
    <div id="tab-bar" class="tab">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'TabBar',
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
#tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -8px 8px 0 rgba(0, 0, 0, 0.21);
}
</style>
