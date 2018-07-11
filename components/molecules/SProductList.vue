<template>
  <div class="s-product-list">
    <div class="product" v-for="product in products">
      <div class="product__sample">
        <img class="product__sample__image" :src="product.sampleImageUrl">
      </div>
      <span class="product__title">{{ product.material.title }}</span>
      <span class="product__price">&yen;{{ product.sampleItemVariant.price + product.material.price | comma }}</span>
      <div class="product__user">
        <img class="product__user__avatar" :src="product.material.user.avatarUrl">
        <span class="product__user__name">{{ product.material.user.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/stylesheets/mixins/fonts";
@import "~assets/stylesheets/mixins/variables";

.s-product-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.product {
  width: calc(50% - 5px);
  margin-bottom: 15px;
  font-size: 0;
}

.product__sample {
  background-color: $graylight;
  width: 100%;
  padding-top: 100%;
  position: relative;
}

.product__sample__image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
}

.product__title {
  @include font-size(normal);
  @include overflow-elipsis;

  font-weight: bold;
  display: inline-block;
  width: 100%;
  margin-top: 3px;
  margin-bottom: 2px;
}

.product__price {
  @include font-size(small);

  color: $gray;
  display: inline-block;
  width: 100%;
  margin-bottom: 7px;
}

.product__user {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
}

.product__user__avatar {
  border-radius: 50%;
  width: 24px;
  height: 24px;
}

.product__user__name {
  @include font-size(normal);
  @include overflow-elipsis;

  margin-left: 5px;
  line-height: 24px;
}
</style>
