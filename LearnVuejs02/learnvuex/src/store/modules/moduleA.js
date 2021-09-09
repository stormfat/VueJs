export default {
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
