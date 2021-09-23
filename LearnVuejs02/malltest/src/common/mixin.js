// import { debouce } from './utils';

// export const itemListenerMixin = {
//     data() {
//         return {
//             itemImgListener: null,
//             newRefresh: null
//         };
//     },
//     mounted() {
//         this.newRefresh = debouce(this.$ref.scroll.refress, 100);
//         this.itemImgListener = () => {
//             this.newRefresh();
//         };
//     }
// };

import BackTop from 'components/content/backtop/BackTop';

export const backToTop = {
    data() {
        return {
            flag: false
        };
    },
    methods: {
        backClick() {
            this.$refs.scroll.ScrollBy(0, 0);
        }
    },
    components: {
        BackTop
    }
};
