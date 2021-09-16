<template>
    <div id="home">
        <nav-bar class="home-nav"> <template v-slot:center>购物街</template> </nav-bar>
        <bs-scroll class="content">
            <div>
                <home-swiper :banners="banners" />
                <recommend-view :recommends="recommends" />
                <feature-view />
                <tab-control class="tab-control" :titles="titles" @tabClick="tabClick" />
                <goods-list :goods="showGoods" />
            </div>
        </bs-scroll>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabcontrol/TabControl';
import HomeSwiper from 'views/home/childComps/HomeSwiper';
import RecommendView from 'views/home/childComps/RecommendView';
import FeatureView from './childComps/FeatureView.vue';
import GoodsList from 'components/content/goods/GoodsList';

import { getHomeMultidata, getHomeGoods } from 'network/home';
import BsScroll from '../../components/common/bsscroll/BsScroll';

export default {
    name: 'Home',
    data() {
        return {
            currentType: 'pop',
            banners: [],
            recommends: [],
            titles: ['流行', '新款', '精选'],
            goods: {
                pop: { page: 1, list: [] },
                new: { page: 1, list: [] },
                sell: { page: 1, list: [] }
            }
        };
    },
    created() {
        this.getMultidata();
        this.getGoods('pop');
        this.getGoods('new');
        this.getGoods('sell');
    },
    methods: {
        //#region 事件监听相关
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = 'pop';
                    break;
                case 1:
                    this.currentType = 'new';
                    break;
                case 2:
                    this.currentType = 'sell';
            }
        },
        //#endregion

        //#region 网络请求相关
        getMultidata() {
            //1.请求多个数据
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            });
        },
        getGoods(type) {
            getHomeGoods(type, this.goods[type].page).then(res => {
                //console.log(res.data.list);

                //将res.data.list数组中的所有元素放到goods.list中
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page += 1;
            });
        }
        //#endregion
    },

    activated: function() {
        this.$refs.hSwiper.startTimer();
    },
    deactivated: function() {
        this.$refs.hSwiper.stopTimer();
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list;
        }
    },
    components: { NavBar, HomeSwiper, RecommendView, FeatureView, TabControl, GoodsList, BsScroll }
};
</script>

<style scoped>
#home {
    /* padding-top: 44px;
    position: relative; */
    height: 100vh;
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

.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>
