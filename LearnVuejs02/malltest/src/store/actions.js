import { ADD_COUNTER, ADD_TO_CART } from './mutation-types';
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => {
                return item.iid === payload.iid;
            });
            //查找传入的商品是否已经存在与购物车数组中

            if (oldProduct) {
                //如果商品已经存在调用商品加1
                context.commit(ADD_COUNTER, oldProduct);
                resolve('当前商品数量加1');
            } else {
                //如果是新商品则加入到购物车数组中
                context.commit(ADD_TO_CART, payload);
                resolve('当前商品添加购物车');
            }
        });
    }
};
