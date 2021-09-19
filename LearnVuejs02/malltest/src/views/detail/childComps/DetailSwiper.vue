<template>
    <Swiper>
        <swiper-item v-for="img in topImages" class="item">
            <img :src="img" />
        </swiper-item>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';
export default {
    name: 'DetailSwiper',
    data() {
        return {};
    },
    methods: {},
    props: {
        topImages: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    components: { Swiper, SwiperItem }
};
</script>

<style scoped>
.item {
    height: 400px;
    width: 100%;
}

img {
    width: 100%;
    max-height: 100%;
}
</style>
