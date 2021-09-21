<template>
    <div id="detail">
        <detail-nav-bar class="nav-bar" @clickIndex="tabClick" ref="navbar" @returnPosition="_getNavPosition" />
        <bs-scroll class="content" ref="scroll" :probe-type="3" @returnPosition="_getScrollY">
            <div>
                <detail-swiper :top-images="topImages" />
                <detail-base-info :goods="goods" />
                <detail-shop-info :shop="shop" />
                <detail-goods-info :detail-info="detailInfo" class="detailinfo" ref="detail" />
                <detail-param-info :param-info="paramInfo" class="paraminfo" ref="param" />
                <detail-comment-info :comment-info="commentInfo" class="commentinfo" ref="comment" />
                <detail-recommend-info :recommend-list="recommendList" class="recommendlist" ref="recommend" />
            </div>
        </bs-scroll>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import BsScroll from 'components/common/bsscroll/BsScroll';

import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailParamInfo from './childComps/DetailParamInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailRecommendInfo from './childComps/DetailRecommendInfo';

import { getDetail, GoodsInfo, Shop, GoodsParam, getRecommend } from 'network/detail';

export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            detailOffSet: 0, //DetailGoodsInfo组件顶部偏移量
            paramOffSet: 0, //DetailParamInfo组件顶部偏移量
            commentOffSet: 0, //DetailCommentInfo组件顶部偏移量
            recommendOffSet: 0, //DetailRecommendInfo组件顶部偏移量
            scrollY: 0, //当前Y轴位置
            offsetFlag: true, //判断偏移量是否已经计算
            topImages: [],
            recommendList: [],
            goods: {},
            shop: {},
            detailInfo: {},
            goodsParam: {},
            paramInfo: {},
            commentInfo: {}
        };
    },
    methods: {},
    created() {
        this.iid = this.$route.params.iid;
        this._getDetail(this.iid);
        this._getRecommend();
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailRecommendInfo,
        BsScroll
    },
    props: {
        item: {
            type: Object,
            default: null
        }
    },
    methods: {
        _getDetail(iid) {
            getDetail(iid).then(res => {
                const data = res.result;
                //获取商品详情轮播图集合
                this.topImages.push(...data.itemInfo.topImages);

                //获取商品信息
                this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);
                //创建店铺信息对象
                this.shop = new Shop(data.shopInfo);
                //保存商品的详情数据
                this.detailInfo = data.detailInfo;
                //获取参数信息
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
                //获取评论信息
                if (data.rate.list) {
                    this.commentInfo = data.rate.list[0];
                }

                console.log(res);
            });
        },

        //获取推荐列表
        _getRecommend() {
            getRecommend().then((res, error) => {
                if (error) return;
                this.recommendList = res.data.list;
            });
        },

        //获取各个组件的相对偏移量
        _getAllOffsetTop() {
            this.detailOffSet = this.$refs.detail.$el.offsetTop;
            this.paramOffSet = this.$refs.param.$el.offsetTop;
            this.commentOffSet = this.$refs.comment.$el.offsetTop;
            this.recommendOffSet = this.$refs.recommend.$el.offsetTop;
            this.offsetFlag = false; //方法调用标志位，确保只被调用一次。
        },

        //让【商品，参数，评论，推荐】根据滚动位置显示红色
        _getScrollY(position) {
            //如果没有偏移量，先获取偏移量
            if (this.offsetFlag) {
                this._getAllOffsetTop();
            }
            //获取当前的Y坐标值
            this.scrollY = position.y;
            //得到当前坐标的绝对值
            let pointY = Math.abs(this.scrollY);
            let i = 0; //i为需要传递给nav-bar：index的值。
            //测试代码：用来看当前坐标和组件偏移量
            // console.log('ponintY=', pointY, 'detailOffset=', this.detailOffSet);
            //用当前坐标值和各组件偏移量范围进行比较，设定i的值
            if (pointY <= this.paramOffSet) {
                i = 0;
            }
            if (pointY >= this.paramOffSet && pointY < this.commentOffSet) {
                i = 1;
            }
            if (pointY >= this.commentOffSet && pointY < this.recommendOffSet) {
                i = 2;
            }
            if (pointY >= this.recommendOffSet) {
                i = 3;
            }
            this.$refs.navbar.currentIndex = i;
        },

        //点击【参数，评论，推荐】后定位到响应组件
        tabClick(index) {
            if (this.offsetFlag) {
                this._getAllOffsetTop();
            }

            switch (index) {
                case 0:
                    this.$refs.scroll.ScrollBy(0, -this.detailOffSet);
                    //点击后将目前点击的index传给nav-bar
                    this.$refs.navbar.currentIndex = 0;
                    break;
                case 1:
                    this.$refs.scroll.ScrollBy(0, -this.paramOffSet);
                    this.$refs.navbar.currentIndex = 1;
                    break;
                case 2:
                    this.$refs.scroll.ScrollBy(0, -this.commentOffSet);
                    this.$refs.navbar.currentIndex = 2;
                    break;
                case 3:
                    this.$refs.scroll.ScrollBy(0, -this.recommendOffSet);
                    this.$refs.navbar.currentIndex = 3;
                    break;
            }
        }
    }
};
</script>

<style scoped>
#detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}

.content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}

.nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
}
</style>
