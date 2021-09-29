import { ADD_COUNTER, ADD_TO_CART } from './mutation-types';
export default {
    addCart(context, payload) {
        console.log(payload.iid);

        return new Promise((resolve, reject) => {
            const oldProduct = context.state.cartList.find(item => {
                item.iid === payload.iid;
            });
            //查找传入的商品是否已经存在与购物车数组中

            if (oldProduct) {
                console.log('1');
                //如果商品已经存在调用商品加1
                context.commit(ADD_COUNTER, oldProduct);
                resolve('当前商品数量加1');
            } else {
                //console.log(item.iid, payload.iid);
                //如果是新商品则加入到购物车数组中
                context.commit(ADD_TO_CART, payload);
                resolve('当前商品添加购物车');
            }
        });
    }
};
