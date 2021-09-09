import Vue from 'vue';
import Vuex from 'vuex';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

//1.安装插件
Vue.use(Vuex);

//2.创建对象

const moduleA = {
    state: {
        name: '尤因'
    },
    getters: {
        changeName(state, getters, rootstate) {
            return state.name + rootstate.counter;
        }
    },
    mutations: {
        modulesInfo(state, payload) {
            state.name = payload;
        }
    },
    actions: {
        aUpdateName(context, payload) {
            setTimeout(() => {
                context.commit('modulesInfo', payload), 1000;
            });
        }
    }
};

const state = {
    counter: 1000,
    students: [
        { id: 1, name: 'kobe', age: 40 },
        { id: 2, name: 'jordan', age: 50 },
        { id: 3, name: "o'neal", age: 40 },
        { id: 4, name: 'james', age: 41 },
        { id: 5, name: 'stockton', age: 42 }
    ],
    info: { name: 'gates', sex: 'male', age: 40 }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,

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
