<template>
  <div class="s-product-list">
    <s-product v-for="product in products" :product="product" :key="product.id"/>
  </div>
</template>

<script>
import SProduct from '~/components/molecules/SProduct.vue'

export default {
  components: {
    SProduct,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.s-product-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5px;
}
</style>
