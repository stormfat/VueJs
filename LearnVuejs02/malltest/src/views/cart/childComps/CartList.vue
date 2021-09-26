<template>

    <bs-scroll class="content">
        <div>
            <cart-list-item v-for="(item,index) in list" :key="index" :item-info="item" />
        </div>
    </bs-scroll>

</template>

<script>
    import { mapGetters } from 'vuex'
    import BsScroll from 'components/common/bsscroll/BsScroll'
    import CartListItem from './CartListItem'
    export default {
        name: 'CartList',
        computed: {
            ...mapGetters({ list: 'cartList' })
        },
        components: {
            BsScroll,
            CartListItem
        }
    }


</script>

<style scoped>

    .content {
        height: 100%;
        overflow: hidden
    }
</style>