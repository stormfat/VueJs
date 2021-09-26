<template>

    <bs-scroll class="content">
        <div>
            <div v-for="item in list">
                {{item}}
            </div>
        </div>
    </bs-scroll>

</template>

<script>
    import { mapGetters } from 'vuex'
    import BsScroll from 'components/common/bsscroll/BsScroll'
    export default {
        name: 'CartList',
        computed: {
            ...mapGetters({ list: 'cartList' })
        },
        components: {
            BsScroll
        }
    }


</script>

<style scoped>

    .content {
        height: 100%;
        overflow: hidden
    }
</style>