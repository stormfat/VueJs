export default {
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
};
