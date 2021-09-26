import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
export default {
    addCart(context, payload) {
        //查找传入的商品是否已经存在与购物车数组中
        let oldProduct = context.state.cartList.find(item => {
            item.iid === payload.iid
        })
        if (oldProduct) {
            //如果商品已经存在调用商品加1
            context.commit(ADD_COUNTER, oldProduct)
        } else { //如果是新商品则加入到购物车数组中
            context.commit(ADD_TO_CART, payload)
        }
    }
}
