<template>
    <div class="bottom-nav">
        <div class="check-area">
            <check-button class="check-button" @checkBtnClick="allCheck" :is-checked="checkFlag" />
            <span>全选</span>
        </div>
        <div class="total-price">合计:{{ totalPrice }}</div>
        <div class="calculate" @click="calcClick">去计算({{ cartNum }})</div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';
import { mapGetters } from 'vuex';

export default {
    name: 'CartButtonBar',
    components: { CheckButton },
    data() {
        return {
            //checkFlag: false
        };
    },
    computed: {
        //计算总价格
        totalPrice() {
            return (
                '￥' +
                //先过滤出所有被选中的商品
                this.$store.state.cartList
                    .filter(item => {
                        return item.checked;
                    })
                    //对商品的总价进行汇总
                    .reduce((preValue, item) => {
                        return preValue + item.price * item.count;
                    }, 0)
                    .toFixed(2)
            );
        },

        //获取已选择项的个数
        cartNum() {
            return this.$store.state.cartList.filter(item => {
                return item.checked;
            }).length;
        },

        //判断全选按钮的状态
        checkFlag() {
            if (
                //如果有商品没有被选择，则将全选按钮置为false
                this.$store.state.cartList.filter(item => {
                    return !item.checked;
                }).length
            ) {
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        //全选购物车中所有商品
        allCheck() {
            if (!this.checkFlag) {
                for (let item of this.$store.state.cartList) {
                    item.checked = true;
                }
                // this.checkFlag = !this.checkFlag;
            } else {
                for (let item of this.$store.state.cartList) {
                    item.checked = false;
                }
                //this.checkFlag = !this.checkFlag;
            }
            this.checkFlag = !this.checkFlag;
        },
        calcClick() {
            if (this.cartNum === 0) {
                this.$toast.show('请选择商品', 3000);
            }
        }
    }
};
</script>

<style scoped>
.bottom-nav {
    height: 40px;
    position: relative;
    background-color: #eee;
    bottom: 133px;
    display: flex;
}

.check-area {
    display: flex;
    padding: 10px;
    margin-left: 10px;
    align-items: center;
}

.check-button {
    flex: 1;
    width: 22px;
    height: 22px;
    line-height: 22px;
}

.total-price {
    height: 40px;
    padding: 10px;
    margin-left: 20px;
    align-items: center;
}

.calculate {
    height: 40px;
    padding: 10px;
    margin-left: 40px;

    align-items: center;
    background-color: orange;
}
</style>
