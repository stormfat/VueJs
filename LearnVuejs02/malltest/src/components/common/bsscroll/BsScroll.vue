<template>
    <div ref="wrapper"><slot></slot></div>
</template>

<script>
import BSscroll from 'better-scroll';

export default {
    name: 'BsScroll',
    data() {
        return { scroll: null };
    },
    methods: {
        ScrollBy(x, y, time = 300) {
            this.scroll.scrollTo(x, y, time);
        },
        finishedPull() {
            this.scroll.finishPullUp();
        },
        scrollToel(el, offsetX, offsetY, time = 300) {
            this.scroll.scrollToElement(el, offsetX, offsetY, time);
        }
    },
    mounted() {
        this.scroll = new BSscroll(this.$refs.wrapper, {
            click: true,
            observeImage: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        });

        this.scroll.scrollTo(0, 0);
        //监听滚动的位置并发回到父组件
        if (this.probeType == 2 || this.probeType == 3) {
            this.scroll.on('scroll', position => {
                this.$emit('returnPosition', position);
                //console.log(position.y);
            });
        }

        //监听是否滚动到底部，并发回至父组件请求加载更多数据
        if (this.pullUpLoad) {
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp');
            });
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
/* .wrapper {
    height: 300px;
} */
</style>
