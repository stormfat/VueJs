<template>
    <div id="app">
        <h2>{{ message }}</h2>
        <h2>{{ $store.state.counter }}</h2>
        <h2>{{ $store.getters.powerCounter }}</h2>
        <h2>{{ $store.getters.more20stusLength }}</h2>
        <button @click="addCounter(6)">按钮</button>
        <h2>{{ $store.getters.moreAgeStus(30) }}</h2>
        <h2>{{ $store.state.info }}</h2>
        <ul>
            <li v-for="item in $store.getters.more20age" :key="item.id">{{ item.name }}</li>
        </ul>
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <button @click="addStu">mutation常规方法添加学生</button>
        <button @click="addStuType">mutation特殊方法添加学生</button>
        <button @click="updateInfo">更新信息</button>
        <hellow-vuex />
        <router-view />
    </div>
</template>

<script>
import HellowVuex from '@/components/HellowVuex';
import { INCREMENT, DECREMENT, ADDCOUNTE, ADDSTU, ADDSTUTYPE, UPDATEINFO } from '@/store/mutations-types';

export default {
    name: 'App',
    data() {
        return {
            message: '我是App组件'
        };
    },
    components: { HellowVuex },
    methods: {
        add() {
            this.$store.commit(INCREMENT);
        },
        sub() {
            this.$store.commit(DECREMENT);
        },
        addCounter(count) {
            this.$store.commit(ADDCOUNTE, count);
        },
        addStu() {
            const stu = { id: 5, name: 'Ivesan', age: 35 };
            this.$store.commit(ADDSTU, stu);
        },
        addStuType() {
            const stu = { id: 6, name: 'Rodman', age: 42 };
            this.$store.commit({
                type: ADDSTUTYPE,
                stu
            });
        },
        updateInfo() {
            this.$store.commit(UPDATEINFO);
        }
    }
};
</script>

<style></style>
