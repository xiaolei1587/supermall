// 防抖引入

import { debounce } from "common/utils";

export const itemListenerMixin = {
    data() {
        return {
            itemImageListener: null,
        }
    },
    mounted() {
        // 监听goodslistitem加载完成
        const refresh = debounce(this.$refs.scroll.refresh, 500);
        // 对事件的监听进行保存
        this.itemImageListener = () => {
            refresh();
        };
        this.$bus.$on(
            "itemImageLoad",
            this.itemImageListener
            // this.$refs.scroll.refresh()
            // console.log("------");
        );
        // console.log("混入东西");
    }
}