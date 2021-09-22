<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-style: 24px;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-style: 13px;
  margin-left: 5px;
  text-decoration: line-through;
  font-size: 0.5em;
}

.info-price .discount {
  background-color: var(--color-high-text);
  color: #fff;
  font-size: 12px;
  padding: 3px 5px;
  margin-left: 5px;
  border-radius: 17px;
  margin-bottom: 10px;
}

.info-other {
  display: flex;
  font-size: 0.8rem;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-bottom: 5px;
}

.info-other span {
  flex: 1;
  text-align: center;
}

.info-service {
  display: flex;
  font-size: 14px;
  padding: 15px;
  padding-left: 0;
  padding-right: 0;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 0;
  border-right: 0;
}

.info-service .info-service-item {
  flex: 1;
  text-align: center;
}

.info-service .info-service-item img {
  width: 14px;
  height: 14px;
}
</style>