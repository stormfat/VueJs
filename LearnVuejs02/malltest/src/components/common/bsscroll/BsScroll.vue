<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BSscroll from 'better-scroll';

export default {
    name: 'BsScroll',
    data() {
        return { scroll: null };
    },
    methods: {},
    mounted() {
        this.scroll = new BSscroll(this.$refs.wrapper, {
            click: true,
            observeImage: true
        });
    }
};
</script>

<style scoped>
/* .wrapper {
    height: 300px;
} */
</style>
