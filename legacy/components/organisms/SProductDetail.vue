<template>
  <div class="s-product-detail">
    <div class="product-sample">
      <img class="product-sample__image" :src="imageUrl" alt="">
    </div>
    <div class="product-section">
      <h2 class="product__title">{{ product.material.title }}</h2>
      <span class="product__price">&yen;{{ product.sampleItemVariant.price + product.material.price | comma }}（税抜）</span>
    </div>
    <div class="product-section" v-if="productColors.length > 1">
      <span class="product-section__heading">カラーを選択</span>
      <s-color-picker class="product-section__content" :colors="productColors" :color-name="itemColor" @change="onColorChange"/>
    </div>
    <div class="product-section" v-if="productSizes.length > 1">
      <span class="product-section__heading">サイズを選択</span>
      <s-size-selector class="product-section__content" :sizes="productSizes" :size-name="itemSize" @change="onSizeChange"/>
    </div>
    <div class="product-section">
      <span class="product-section__heading">このアイテムについて</span>
      <p class="product-section__content">{{ product.material.description }}</p>
    </div>
  </div>
</template>

<script>
import SColorPicker from '~/components/molecules/SColorPicker.vue'
import SSizeSelector from '~/components/molecules/SSizeSelector.vue'

export default {
  components: {
    SColorPicker,
    SSizeSelector,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    itemSize: {
      type: String,
      required: true,
    },
    itemColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      return this.product.imageUrl
        .replace('{size}', this.itemSize)
        .replace('{color}', this.itemColor)
        .replace('{width}', '765')
        .replace('{height}', '765')
        .replace('[/angle]', '')
    },
    productColors() {
      return this.product.itemVariants
        .filter(v => v.enabled && v.size.name == this.itemSize)
        .map(v => v.color)
    },
    productSizes() {
      return this.product.itemVariants
        .filter(v => v.enabled && v.color.name == this.itemColor)
        .map(v => v.size)
    }
  },
  methods: {
    onColorChange(colorName) {
      location.href = [
        '',
        this.product.material.user.name,
        this.product.id,
        this.product.item.name,
        this.itemSize,
        colorName,
      ].join('/')
    },
    onSizeChange(sizeName) {
      location.href = [
        '',
        this.product.material.user.name,
        this.product.id,
        this.product.item.name,
        sizeName,
        this.itemColor,
      ].join('/')
    }
  }
}
</script>

<style lang="scss">
@import "~assets/stylesheets/mixins/fonts";
@import "~assets/stylesheets/mixins/variables";

.product-sample {
  width: 100%;
  padding-top: 100%;
  position: relative;
}

.product-sample__image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
}

.product__title {
  @include font-size(large);
  @include overflow-elipsis;

  color: $black;
}

.product__price {
  @include font-size(normal);

  color: $gray;
  margin-left: 3px;
}

.product-section {
  margin: 10px;
}

.product-section__heading {
  @include font-size(normal);

  color: $gray;
  font-weight: bold;
}

.product-section__content {
  @include font-size(normal);

  margin-top: 5px;
}
</style>
