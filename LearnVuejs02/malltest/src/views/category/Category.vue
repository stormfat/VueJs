<template>
    <div id="cate">
        <nav-bar class="cate-nav">
            <template v-slot:center>
                购物街
            </template>
        </nav-bar>
        <div class="content"><cate-tab :tab-data="tabData" /></div>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import CateTab from './childComps/CateTab';
import { getCategory, getSubcategory, getCategoryDetail } from 'network/category';
export default {
    name: 'Category',
    data() {
        return {
            tabData: []
        };
    },
    methods: {},
    components: {
        NavBar,
        CateTab
    },

    created() {
        getCategory().then(res => {
            //获取分类所有信息
            console.log(res);
            this.tabData.push(...res.data.category.list);

            //console.log(tabData);
        });
    }
};
</script>

<style scoped>
#cate {
    height: 100vh;
}
.cate-nav {
    background-color: var(--color-tint);
    font-weight: 700;
    color: white;
}

.content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
}
</style>
