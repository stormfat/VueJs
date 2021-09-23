<template>
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center>购物街</template>
        </nav-bar>
        <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl1" class="tab-control-two" v-show="tabFlag" />
        <!-- 给子组件的probeType属性赋值 获取子组件发射回来的returnPosition事件 给子组件的pullUpLoad属性赋值
        获取子组件发回的pullingUp事件 -->
        <bs-scroll
            class="content"
            ref="scroll"
            :probe-type="3"
            @returnPosition="getPosition"
            :pull-up-load="true"
            @pullingUp="PullLoad"
        >
            <div>
                <home-swiper :banners="banners" @image-load="imageFinished" />
                <recommend-view :recommends="recommends" />
                <feature-view />
                <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2" />
                <goods-list :goods="showGoods" ref="goods" />
            </div>
        </bs-scroll>
        <!-- .native使组件支持标签的原生方法 -->
        <back-top @click.native="backClick" v-show="flag" />
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
import BsScroll from '../../components/common/bsscroll/BsScroll';
import HomeSwiper from 'views/home/childComps/HomeSwiper';
import RecommendView from 'views/home/childComps/RecommendView';
import FeatureView from './childComps/FeatureView.vue';
import GoodsList from 'components/content/goods/GoodsList';
import TabControl from 'components/content/tabcontrol/TabControl';

import { backToTop } from '../../common/mixin';
import { getHomeMultidata, getHomeGoods } from 'network/home';
export default {
    name: 'Home',
    data() {
        return {
            goodPointY: 0,
            currentType: 'pop',
            tabOffsetTop: 0, //设置TabControl组件顶部偏移量
            tabFlag: false, //设置tabcontrol是否显示
            banners: [],
            recommends: [],
            titles: ['流行', '新款', '精选'],
            goods: {
                pop: {
                    page: 1,
                    list: []
                },
                new: {
                    page: 1,
                    list: []
                },
                sell: {
                    page: 1,
                    list: []
                }
            }
        };
    },
    mixins: [backToTop],
    created() {
        this.getMultidata();
        this.getGoods('pop');
        this.getGoods('new');
        this.getGoods('sell');
    },
    methods: {
        //#region 事件监听相关
        tabClick(index) {
            this.goodPointY = this.$refs.goods.$el.offsetTop;
            switch (index) {
                case 0:
                    this.currentType = 'pop';
                    this.$refs.scroll.ScrollBy(0, -this.goodPointY);
                    break;
                case 1:
                    this.currentType = 'new';
                    this.$refs.scroll.ScrollBy(0, -this.goodPointY);
                    break;
                case 2:
                    this.currentType = 'sell';
                    this.$refs.scroll.ScrollBy(0, -this.goodPointY);
                    break;
            }
            //让两个tabControl组件的当前选中项保持一致
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
        },

        getPosition(position) {
            //判断BackTop是否显示
            this.flag = position.y < -1000 ? true : false;
            //决定tabControl是否显示
            this.tabFlag = Math.abs(position.y) > this.tabOffsetTop ? true : false;
        },
        PullLoad() {
            this.getGoods(this.currentType);
        },
        imageFinished() {
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
                this.$refs.scroll.finishedPull();
            });
        }
        //#endregion
    },
    // activated: function() {
    //     this.$refs.hSwiper.startTimer();
    // },
    // deactivated: function() {
    //     this.$refs.hSwiper.stopTimer();
    // },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list;
        }
    },
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        BsScroll
    }
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
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8; */
}

.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}

.tab-control-two {
    position: relative;
    z-index: 9;
}
</style>
