
import {
    createStore
} from 'vuex';
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            cartList: []
        };
    },
    mutations,
    getters,
    actions,
});

export default store;
