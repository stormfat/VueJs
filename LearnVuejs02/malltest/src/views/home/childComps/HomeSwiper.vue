<template>
    <Swiper>
        <swiper-item v-for="item in banners">
            <a :herf="item.link"> <img :src="item.image" @load="imageLoad"/></a>
        </swiper-item>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';
export default {
    name: 'HomeSwiper',
    data() {
        return {
            emitFlag: true
        };
    },
    methods: {
        //监听img标签的load方法（表示图片加载完成），并发送给父组件
        imageLoad() {
            if (this.emitFlag) {
                this.$emit('imageLoad');
                this.emitFlag = false;
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<style scoped>
img {
    width: 100%;
}
</style>
