import Vue from 'vue';
import Vuex from 'vuex';
import { INCREMENT, DECREMENT, ADDCOUNTE, ADDSTU, ADDSTUTYPE, UPDATEINFO, AUPDATEINFO } from '@/store/mutations-types';

//1.安装插件
Vue.use(Vuex);

//2.创建对象

const moduleA = {
    state: {
        name: '尤因'
    },
    getters: {},
    mutations: {},
    actions: {}
};

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
    actions: {
        //提交一个异步方法并在完成后返回信息。
        [AUPDATEINFO](context, payload) {
            return new Promise(resolve => {
                setTimeout(() => {
                    context.commit(UPDATEINFO);
                    console.log(payload);
                    resolve('通知已提交完成');
                }, 1000);
            });
        }
    },

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
    modules: {
        a: moduleA
    }
});

//导出对象实例
export default store;
