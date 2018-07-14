<template>
  <div class="product">
    <a class="product__sample" :href="productUrl">
      <img class="product__sample__image" :src="product.sampleImageUrl">
    </a>
    <a class="product__title" :href="productUrl">
      <span>{{ product.material.title }}</span>
    </a>
    <span class="product__price">&yen;{{ product.sampleItemVariant.price + product.material.price | comma }}</span>
    <a class="product__user" :href="userShopUrl(product.sampleUrl)">
      <img class="product__user__avatar" :src="product.material.user.avatarUrl">
      <span class="product__user__name">{{ product.material.user.name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productUrl() {
      return [
        '',
        this.product.material.user.name,
        this.product.id,
        this.product.item.name,
        this.product.sampleItemVariant.size.name,
        this.product.sampleItemVariant.color.name,
      ].join('/')
    }
  },
  methods: {
    userShopUrl(sampleUrl) {
      const regexp = new RegExp('(https://suzuri.jp/.+?)/')
      const match = sampleUrl.match(regexp)

      return match[0]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/stylesheets/mixins/fonts";
@import "~assets/stylesheets/mixins/variables";

.product {
  width: calc(50% - 10px);
  max-width: 323px;
  margin: 0 5px 15px 5px;
  font-size: 0;
}

.product__sample {
  background-color: $graylight;
  display: block;
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
  @include link-color($black);
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
  text-decoration: none;
}

.product__user__avatar {
  border-radius: 50%;
  width: 24px;
  height: 24px;
}

.product__user__name {
  @include font-size(normal);
  @include link-color($black);
  @include overflow-elipsis;

  margin-left: 5px;
  line-height: 24px;
}
</style>
