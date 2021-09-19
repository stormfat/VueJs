<template>
    <div id="detail">
        <detail-nav-bar />
        <detail-swiper :top-images="topImages" />
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper';
import { getDetail, GoodsInfo } from 'network/detail';

export default {
    name: 'Detail',
    data() {
        return { iid: null, topImages: [], goods: null };
    },
    methods: {},
    created() {
        this.iid = this.$route.params.iid;
        getDetail(this.iid).then(res => {
            const data = res.result;
            //获取商品详情轮播图集合
            this.topImages.push(...data.itemInfo.topImages);

            //获取商品信息
            this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);
            console.log(res);
        });
    },
    components: {
        DetailNavBar,
        DetailSwiper
    },
    props: {
        item: {
            type: Object,
            default: null
        }
    }
};
</script>

<style scoped>
#detail {
    height: 100vh;
}
</style>
