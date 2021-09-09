import Vue from 'vue';
import Vuex from 'vuex';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from './getters';
import moduleA from './modules/moduleA';
//1.安装插件
Vue.use(Vuex);

//2.创建对象

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
    getters,
    modules: {
        a: moduleA
    }
});

//导出对象实例
export default store;
