<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    // 注意这里父组件传过来，父组件的属性应该写为probe-type,pull-up-load
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      // console.log("------");
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
  created() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        observeDOM: true,
        mouseWheel: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        disableTouch: false,
      });

      // console.log(this.scroll);
      // this.scroll.refresh();
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", (position) => {
          // console.log(position);
          this.$emit("scroll", position);
        });
      }
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          // console.log("监听到滚动到底部");
          this.$emit("loadMore");
        });
      }
    });
  },
  mounted() {},
  // mounted() {
  //   // this.scroll.on.finishPullUp();
  //   this.$nextTick(() => {
  //     setTimeOut(() => {
  //       this.scroll = new BScroll(this.$refs.wrapper, {
  //         click: true,
  //         observeDOM: true,
  //         mouseWheel: true,
  //         probeType: 2,
  //         disableTouch: false,
  //       });
  //     }, 50);
  //   });
  // },
};
</script>

<style scoped>
</style>