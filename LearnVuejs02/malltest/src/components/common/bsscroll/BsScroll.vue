<template>
    <div ref="wrapper"><slot></slot></div>
</template>

<script>
import BSscroll from "better-scroll";

export default {
    name: "BsScroll",
    data() {
        return { scroll: null };
    },
    methods: {
        ScrollBy(x, y, time = 300) {
            this.scroll.scrollTo(x, y, time);
        },
    },
    mounted() {
        this.scroll = new BSscroll(this.$refs.wrapper, {
            click: true,
            observeImage: true,
            probeType: this.probeType,
        });
        this.scroll.scrollTo(0, 0);
        this.scroll.on("scroll", (position) => {
            this.$emit("returnPosition", position);
        });
    },
    props: {
        probeType: {
            type: Number,
            default: 0,
        },
    },
};
</script>

<style scoped>
/* .wrapper {
    height: 300px;
} */
</style>
