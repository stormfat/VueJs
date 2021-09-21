import { debouce } from './utils';

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
            newRefresh: null
        };
    },
    mounted() {
        this.newRefresh = debouce(this.$ref.scroll.refress, 100);
        this.itemImgListener = () => {
            this.newRefresh();
        };
    }
};
