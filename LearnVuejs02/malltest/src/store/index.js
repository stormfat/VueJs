import { createApp } from 'vue';
import { createStore } from 'vuex';

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            cartList: []
        };
    },
    mutations: {
        addCart(state, payload) {
            state.cartList.push(payload);
        }
    }
});

export default store;
