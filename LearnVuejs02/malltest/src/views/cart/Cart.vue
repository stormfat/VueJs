<template>
    <div class="cart">
        <!--导航-->
        <nav-bar class="cart-nav">
            <template v-slot:center>
                购物车({{cartLength}})
            </template>
        </nav-bar>
        <!--商品列表-->
        <cart-list/>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import CartList from './childComps/CartList'

    import { mapGetters } from 'vuex'
    export default {
        name: 'Cart',
        data() {
            return {};
        },
        methods: {},
        components: {
            NavBar,
            CartList
        },
        computed: {
            ...mapGetters(['cartLength'])
        }
    };
</script>

<style scoped>
    .cart{
        height:100vh
    }
    .cart-nav {
        background-color: var(--color-tint);
        font-weight: 700;
        color: white;
    }
</style>
