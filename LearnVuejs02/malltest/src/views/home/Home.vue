<template>
    <div id="home">
        <nav-bar class="home-nav"> <template v-slot:center>购物街</template> </nav-bar>

        <home-swiper :banners="banners" />
        <recommend-view :recommends="recommends" />
        <feature-view />
        <tab-control class="tab-control" :titles="titles" />
        <ul>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
            <li>2333</li>
        </ul>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabcontrol/TabControl';
import HomeSwiper from 'views/home/childComps/HomeSwiper';
import RecommendView from 'views/home/childComps/RecommendView';
import FeatureView from './childComps/FeatureView.vue';

import { getHomeMultidata, getHomeGoods } from 'network/home';

const POP = 'pop';
const NEW = 'news';
const SELL = 'sell';

export default {
    name: 'Home',
    data() {
        return {
            banners: [],
            recommends: [],
            titles: ['流行', '新款', '精选'],
            goods: {
                pop: { page: 0, list: [] },
                news: { page: 0, list: [] },
                sell: { page: 0, list: [] }
            }
        };
    },
    created() {
        this.getMultidata();
        this.getGoods(POP);
        this.getGoods(NEW);
        this.getGoods(SELL);
    },
    methods: {
        getMultidata() {
            //1.请求多个数据
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            });
        },
        getGoods(type) {
            let page = this.goods[type].page + 2;
            getHomeGoods(type, page).then(res => {
                console.log(res);
                this.goods[type].page += 1;

                //将res.data.list数组中的所有元素放到goods.list中
                this.goods[type].list.push(...res.data.list);
            });
        }
    },
    components: { NavBar, HomeSwiper, RecommendView, FeatureView, TabControl }
};
</script>

<style scoped>
#home {
    padding-top: 44px;
}

.home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
}

.tab-control {
    position: sticky; /**根据需要停留的位置决定position的值是static还是fix */
    top: 44px;
    bottom: 44px;
}
</style>
