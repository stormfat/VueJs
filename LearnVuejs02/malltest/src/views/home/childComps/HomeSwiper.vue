<template>
    <Swiper>
        <swiper-item v-for="item in banners">
            <a :herf="item.link"> <img :src="item.image"/></a>
        </swiper-item>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';
export default {
    name: 'HomeSwiper',
    data() {
        return {};
    },
    methods: {},
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
