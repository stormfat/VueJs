import { INCREMENT, DECREMENT, ADDCOUNTE, ADDSTU, ADDSTUTYPE, UPDATEINFO } from '@/store/mutations-types';
export default {
    [INCREMENT](state) {
        state.counter++;
    },
    [DECREMENT](state) {
        state.counter--;
    },
    [ADDCOUNTE](state, count) {
        state.counter += count;
    },
    [ADDSTU](state, stu) {
        state.students.push(stu);
    },
    [ADDSTUTYPE](state, payload) {
        state.students.push(payload.stu);
    },
    [UPDATEINFO](state) {
        //修改信息，并通过Vue的响应式方法，更新所有组件中的相关数据
        Vue.set(state.info, 'address', 'ningbo');
        Vue.delete(state.info, 'age');
    }
};
