import Vue from 'vue';
import Vuex from 'vuex';
import { INCREMENT, DECREMENT, ADDCOUNTE, ADDSTU, ADDSTUTYPE, UPDATEINFO } from '@/store/mutations-types';

//1.安装插件
Vue.use(Vuex);

//2.创建对象
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            { id: 1, name: 'kobe', age: 40 },
            { id: 2, name: 'jordan', age: 50 },
            { id: 3, name: "o'neal", age: 40 },
            { id: 4, name: 'james', age: 41 }
        ],
        info: { name: 'gates', sex: 'male', age: 40 }
    },
    mutations: {
        //方法
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
    },
    actions: {},
    getters: {
        powerCounter(state) {
            return state.counter * state.counter;
        },
        more20age(state) {
            return state.students.filter(s => s.age > 40);
        },
        more20stusLength(state, getters) {
            return getters.more20age.length;
        },
        moreAgeStus(state) {
            return age => {
                return state.students.filter(s => s.age > age);
            };
        }
    },
    modules: {}
});

//导出对象实例
export default store;
