<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥：{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");

      // if(this.$route.path.inedxOf('/home')){
      // this.$bus.$emit("homeItemImageLoad");
      // }else if(this.$route.path.inedxOf('/edtail')){
      //   this.$bus.$emit("detailItemImageLoad")
      // }
    },
    itemClick() {
      // console.log("详情页点击");
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  /* height: 310px; */
  position: relative;
  width: 48%;
  /* margin-left: 1%;
  margin-right: 1%; */
}

.goods-item img {
  width: 100%;
  /* height: 270px; */
  border-radius: 5px;
  border: 3px solid var(--color-tint);
}

.goods-info {
  font-size: 12px;
  position: absolute;
  text-align: center;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-item .collect {
  position: relative;
}

.goods-item .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>