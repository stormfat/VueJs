<template>
    <div class="goods-item" @click="itemClick">
        <img :src="getImg" :key="getImg" alt="" />
        <div class="goods-info">
            <p>{{ goodsItem.title }}</p>
            <span class="price">{{ goodsItem.price }}</span>
            <span class="fav">{{ goodsItem.cfav }}</span>
        </div>
    </div>
</template>

<script>
//import Detail from 'views/detail/Detail'
export default {
    name: 'GoodsListItem',
    data() {
        return {};
    },
    methods: {
        itemClick() {
            this.$router.push('/detail/' + this.goodsItem.iid);
        }
    },
    computed: {
        getImg() {
            return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img;
        }
    },
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {};
            }
        }
    }
};
</script>

<style scoped>
.goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
}

.goods-item img {
    width: 100%;
    border-radius: 5px;
}
.goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}

.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}

.goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
}

.goods-info .fav {
    position: relative;
}

.goods-info .fav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>
